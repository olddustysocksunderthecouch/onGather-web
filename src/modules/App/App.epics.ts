import { CallHistoryMethodAction } from 'connected-react-router'
// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from 'firebase'
import { AnyAction } from 'redux'
import { ActionsObservable, ofType } from 'redux-observable'
import { RehydrateAction } from 'redux-persist'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import {
  initApp,
  initAppSuccess,
  signInGoogleSuccess,
  signOutGoogleSuccess,
} from './App.actions'
import {
  AppActions,
  AppActionTypes,
  InitAppSuccessAction,
  SignInGoogleSuccessAction,
  SignOutGoogleSuccessAction,
} from './types'

export const startInitAppEpic$ = (
  action$: ActionsObservable<RehydrateAction>,
): Observable<AnyAction> =>
  action$.pipe(
    ofType<RehydrateAction>(AppActions.PersistRehydrate),
    map(() => initApp()),
  )

const firebaseConfig = {
  apiKey: 'AIzaSyBcCau-poIS1r0eTp5zGkfMZMt7O9ForM4',
  authDomain: 'ongather-b1834.firebaseapp.com',
  databaseURL: 'https://ongather-b1834.firebaseio.com',
  projectId: 'ongather-b1834',
  storageBucket: 'ongather-b1834.appspot.com',
  messagingSenderId: '41626053541',
  appId: '1:41626053541:web:c4ee1bcae9bda62a45964c',
  measurementId: 'G-3KXMD0FGZ6',
}

export const initAppEpic$ = (
  action$: ActionsObservable<AppActionTypes>,
): Observable<InitAppSuccessAction | CallHistoryMethodAction<[string, any?]>> =>
  action$.pipe(
    ofType<AppActionTypes>(AppActions.InitApp),
    map(() => {
      firebase.initializeApp(firebaseConfig)
      return initAppSuccess()
    }),
  )

export const signInAppEpic$ = (
  action$: ActionsObservable<AppActionTypes>,
): Observable<SignInGoogleSuccessAction> =>
  action$.pipe(
    ofType<AppActionTypes>(AppActions.SignInGoogle),
    map(() => {
      const provider = new firebase.auth.GoogleAuthProvider()
      // provider.addScope('https://www.googleapis.com/auth/calendar.readonly')
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          console.log('user', result.user)
          // This gives you a Google Access Token. You can use it to access the Google API.
          const token: any = result?.credential?.providerId
          // The signed-in user info.
          const user = result.user
        })
        .catch(function (error) {
          // Handle Errors here.

          const errorCode = error.code
          const errorMessage = error.message
          console.log('errorMessage', errorMessage)
          // The email of the user's account used.
          const email = error.email
          // The firebase.auth.AuthCredential type that was used.
          const credential = error.credential
          // ...
        })

      return signInGoogleSuccess()
    }),
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
