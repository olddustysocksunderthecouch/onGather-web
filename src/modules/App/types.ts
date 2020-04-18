export interface AppState {
  loaded: boolean
  loading: boolean
  signedIn: boolean
  user: User
}

export interface User {
  uid: string
  displayName: string
  photoUrl: string
  email: string
}

export enum AppActions {
  InitApp = '/App/INIT_APP',
  InitAppSuccess = '/App/INIT_APP_SUCCESS',
  InitAppFailure = '/App/INIT_APP_FAILURE',
  PersistRehydrate = 'persist/REHYDRATE',
  SignInGoogle = '/App/SIGN_IN_GOOGLE',
  SignInGoogleSuccess = '/App/SIGN_IN_GOOGLE_SUCCESS',
  SignInGoogleFailure = '/App/SIGN_IN_GOOGLE_FAILURE',
  SignOutGoogle = '/App/SIGN_OUT_GOOGLE',
  SignOutGoogleSuccess = '/App/SIGN_OUT_GOOGLE_SUCCESS',
  SignOutGoogleFailure = '/App/SIGN_OUT_GOOGLE_FAILURE',
}

export interface InitAppAction {
  type: typeof AppActions.InitApp
}

export interface InitAppSuccessAction {
  type: typeof AppActions.InitAppSuccess
}

export interface InitAppSuccessAction {
  type: typeof AppActions.InitAppSuccess
}

export interface InitAppFailureAction {
  type: typeof AppActions.InitAppFailure
}

export interface SignInGoogleAction {
  type: typeof AppActions.SignInGoogle
}

export interface SignInGoogleSuccessAction {
  type: typeof AppActions.SignInGoogleSuccess
  payload: {
    user: User
  }
}

export interface SignInGoogleFailureAction {
  type: typeof AppActions.SignInGoogleFailure
  payload: {
    message: string
  }
}

export interface SignOutGoogleAction {
  type: typeof AppActions.SignOutGoogle
}

export interface SignOutGoogleAction {
  type: typeof AppActions.SignOutGoogle
}

export interface SignOutGoogleSuccessAction {
  type: typeof AppActions.SignOutGoogleSuccess
}

export interface SignOutGoogleFailureAction {
  type: typeof AppActions.SignOutGoogleFailure
  payload: {
    message: string
  }
}

export type AppActionTypes =
  | InitAppAction
  | InitAppSuccessAction
  | InitAppFailureAction
  | SignInGoogleAction
  | SignInGoogleSuccessAction
  | SignInGoogleFailureAction
  | SignOutGoogleAction
  | SignOutGoogleSuccessAction
  | SignOutGoogleFailureAction
