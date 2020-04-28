import { CallHistoryMethodAction } from 'connected-react-router'
import * as firebase from 'firebase'
import { AnyAction } from 'redux'
import { ActionsObservable, ofType } from 'redux-observable'
import { RehydrateAction } from 'redux-persist'
import { from, Observable, of } from 'rxjs'
import { catchError, flatMap, map } from 'rxjs/operators'
import {
  initApp,
  initAppSuccess,
  signInGoogleFailure,
  signInGoogleSuccess,
  signOutGoogleSuccess,
} from './App.actions'
import {
  AppActions,
  AppActionTypes,
  InitAppSuccessAction,
  SignInGoogleFailureAction,
  SignInGoogleSuccessAction,
  SignOutGoogleSuccessAction,
  User,
} from './types'

export const startInitAppEpic$ = (
  action$: ActionsObservable<RehydrateAction>,
): Observable<AnyAction> =>
  action$.pipe(
    ofType<RehydrateAction>(AppActions.PersistRehydrate),
    map(() => initApp()),
  )

export const initAppEpic$ = (
  action$: ActionsObservable<AppActionTypes>,
): Observable<InitAppSuccessAction | CallHistoryMethodAction<[string, any?]>> =>
  action$.pipe(
    ofType<AppActionTypes>(AppActions.InitApp),
    map(() => {
      return initAppSuccess()
    }),
  )

export const signInAppEpic$ = (
  action$: ActionsObservable<AppActionTypes>,
): Observable<SignInGoogleSuccessAction | SignInGoogleFailureAction> =>
  action$.pipe(
    ofType<AppActionTypes>(AppActions.SignInGoogle),
    flatMap(
      (
        action,
      ): Observable<SignInGoogleSuccessAction | SignInGoogleFailureAction> => {
        const provider = new firebase.auth.GoogleAuthProvider()
        // provider.addScope('https://www.googleapis.com/auth/calendar.readonly')
        return from(firebase.auth().signInWithRedirect(provider)).pipe(
          flatMap(
            (result: any): Observable<SignInGoogleSuccessAction> => {
              console.log('result: ', result)
              const user: User = {
                uid: result.user.uid,
                displayName: result.user.displayName,
                email: result.user.email,
                photoUrl: result.user.photoURL,
              }
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
  action$: ActionsObservable<AppActionTypes>,
): Observable<SignOutGoogleSuccessAction> =>
  action$.pipe(
    ofType<AppActionTypes>(AppActions.SignOutGoogle),
    map(() => {
      firebase.auth().signOut()
      return signOutGoogleSuccess()
    }),
  )
