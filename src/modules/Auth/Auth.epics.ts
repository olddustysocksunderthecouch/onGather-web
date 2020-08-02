import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/functions'
import { getFirebase } from 'react-redux-firebase'
import { ActionsObservable, ofType, StateObservable } from 'redux-observable'
import { from, Observable, of } from 'rxjs'
import {
  catchError,
  flatMap,
  map,
  mergeMap,
  switchMap,
  withLatestFrom,
} from 'rxjs/operators'
import { RootState } from '../../common/redux/types'
import { User } from '../../common/types'
import {
  fetchScopesFailure,
  generateAuthUrlFailure,
  generateAuthUrlSuccess,
  purgeAuthState,
  requestingScope,
  scopeFetchedError,
  scopeFetchedIsGranted,
  scopeFetchedNotGranted,
  sendCodeFailure,
  sendCodeSuccess,
  signInGoogle,
  signInGoogleFailure,
  signInGoogleSuccess,
  signOutGoogleSuccess,
} from './Auth.actions'
import {
  AuthActions,
  AuthActionTypes,
  FetchScopeAction,
  FetchScopeFailureAction,
  GenerateAuthUrlAction,
  GenerateAuthUrlFailureAction,
  GenerateAuthUrlSuccessAction,
  PurgeAuthStateAction,
  RequestingScopeAction,
  RequestScopeAction,
  ScopeFetchedErrorAction,
  ScopeFetchedIsGrantedAction,
  ScopeFetchedNotGrantedAction,
  SendCodeAction,
  SendCodeFailureAction,
  SendCodeSuccessAction,
  SignInAndRequestScopeAction,
  SignInGoogleAction,
  SignInGoogleFailureAction,
  SignInGoogleSuccessAction,
  SignOutGoogleSuccessAction,
} from './types'

export const signInAppEpic$ = (
  action$: ActionsObservable<AuthActionTypes>,
): Observable<SignInGoogleSuccessAction | SignInGoogleFailureAction> =>
  action$.pipe(
    ofType<AuthActionTypes>(AuthActions.SignInGoogle),
    flatMap(
      (
        action,
      ): Observable<SignInGoogleSuccessAction | SignInGoogleFailureAction> => {
        const provider = new firebase.auth.GoogleAuthProvider()
        provider.setCustomParameters({
          // eslint-disable-next-line @typescript-eslint/camelcase
          include_granted_scopes: true,
        })
        return from(firebase.auth().signInWithRedirect(provider)).pipe(
          flatMap(
            (result: any): Observable<SignInGoogleSuccessAction> => {
              console.log('result: ', result)
              const user: User = {
                uid: result.user.uid,
                displayName: result.user.displayName,
                email: result.user.email,
                photoURL: result.user.photoURL,
              }
              window.ga('set', 'userId', result.user.uid)

              return of(signInGoogleSuccess(user))
            },
          ),
          catchError(
            (error: Error): Observable<SignInGoogleFailureAction> =>
              of(signInGoogleFailure(error.message)),
          ),
        )
      },
    ),
  )

export const signOutAppEpic$ = (
  action$: ActionsObservable<AuthActionTypes>,
): Observable<PurgeAuthStateAction | SignOutGoogleSuccessAction> =>
  action$.pipe(
    ofType<AuthActionTypes>(AuthActions.SignOutGoogle),
    mergeMap(() => {
      firebase.auth().signOut()
      getFirebase().logout()
      return of(purgeAuthState(), signOutGoogleSuccess())
    }),
  )

export const generateAuthUrlEpic$ = (
  action$: ActionsObservable<GenerateAuthUrlAction>,
  state$: StateObservable<RootState>,
): Observable<GenerateAuthUrlSuccessAction | GenerateAuthUrlFailureAction> =>
  action$.pipe(
    ofType<GenerateAuthUrlAction>(AuthActions.GenerateAuthUrl),
    withLatestFrom(state$),
    flatMap(([action, state]) =>
      from(
        firebase.functions().httpsCallable('googleCalendar-generateAuthUrl')(),
      ).pipe(
        flatMap(
          (result: any): Observable<GenerateAuthUrlSuccessAction> => {
            return of(generateAuthUrlSuccess(result))
          },
        ),
        catchError(
          (error: Error): Observable<GenerateAuthUrlFailureAction> =>
            of(generateAuthUrlFailure(error.message)),
        ),
      ),
    ),
  )

export const signInAndRequestScopeEpic$ = (
  action$: ActionsObservable<SignInAndRequestScopeAction>,
): Observable<SignInGoogleAction> =>
  action$.pipe(
    ofType<SignInAndRequestScopeAction>(AuthActions.SignInAndRequestScope),
    map(() => {
      return signInGoogle()
    }),
  )

export const requestScopeEpic$ = (
  action$: ActionsObservable<RequestScopeAction>,
  state$: StateObservable<RootState>,
): Observable<RequestingScopeAction> =>
  action$.pipe(
    ofType<RequestScopeAction>(AuthActions.RequestScope),
    withLatestFrom(state$),
    flatMap(([action, state]) => {
      window.open(
        `${process.env['REACT_APP_AUTH_PERMISSION_URL'] as string}${escape(
          state.firebase.auth.email,
        )}`,
        '_self',
      )
      return of(requestingScope())
    }),
  )

export const sendCodeEpic$ = (
  action$: ActionsObservable<SendCodeAction>,
  state$: StateObservable<RootState>,
): Observable<SendCodeSuccessAction | SendCodeFailureAction> =>
  action$.pipe(
    ofType<SendCodeAction>(AuthActions.SendCode),
    withLatestFrom(state$),
    flatMap(([action, state]) =>
      from(
        firebase.functions().httpsCallable('auth-getAndStoreToken')(
          action.payload.code,
        ),
      ).pipe(
        flatMap(
          (result: any): Observable<SendCodeSuccessAction> =>
            of(sendCodeSuccess(result)),
        ),
        catchError(
          (error: Error): Observable<SendCodeFailureAction> =>
            of(sendCodeFailure(error.message)),
        ),
      ),
    ),
  )

export const fetchScopesEpic$ = (
  action$: ActionsObservable<FetchScopeAction>,
  state$: StateObservable<RootState>,
): Observable<
  | ScopeFetchedNotGrantedAction
  | ScopeFetchedIsGrantedAction
  | ScopeFetchedErrorAction
  | FetchScopeFailureAction
> =>
  action$.pipe(
    ofType<FetchScopeAction>(AuthActions.FetchScope),
    withLatestFrom(state$),
    flatMap(([action, state]) => {
      return from(
        firebase
          .firestore()
          .collection('users')
          .doc(state.firebase.auth.uid)
          .get(),
      ).pipe(
        switchMap(
          (
            result: any,
          ): Observable<
            | ScopeFetchedNotGrantedAction
            | ScopeFetchedIsGrantedAction
            | ScopeFetchedErrorAction
          > => {
            const user = result.data() as User
            if (user.scopeError && user.scopeError.length > 0) {
              return of(scopeFetchedError(user.scopeError))
            } else if (user && user.scopes?.includes('calendar.events')) {
              return of(scopeFetchedIsGranted())
            } else {
              return of(scopeFetchedNotGranted())
            }
          },
        ),
        catchError(
          (error: Error): Observable<FetchScopeFailureAction> =>
            of(fetchScopesFailure(error.message)),
        ),
      )
    }),
  )
