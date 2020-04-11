export interface AppState {
  loaded: boolean
  loading: boolean
  onboarded: boolean
}

export enum AppActions {
  InitApp = '/App/INIT_APP',
  InitAppSuccess = '/App/INIT_APP_SUCCESS',
  InitAppFailure = '/App/INIT_APP_FAILURE',
  PersistRehydrate = 'persist/REHYDRATE',
  Onboarded = '/App/ONBOARDED',
  StartedOnboarding = '/App/STARTED_ONBOARDING',
  SignInGoogle = '/App/SIGN_IN_GOOGLE',
  SignInGoogleSuccess = '/App/SIGN_IN_GOOGLE_SUCCESS',
  SignOutGoogle = '/App/SIGN_OUT_GOOGLE',
  SignOutGoogleSuccess = '/App/SIGN_OUT_GOOGLE_SUCCESS',
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

export interface StartedOnboardingAction {
  type: typeof AppActions.StartedOnboarding
}

export interface OnboardedAction {
  type: typeof AppActions.Onboarded
}

export interface SignInGoogleAction {
  type: typeof AppActions.SignInGoogle
}

export interface SignInGoogleSuccessAction {
  type: typeof AppActions.SignInGoogleSuccess
}

export interface SignOutGoogleAction {
  type: typeof AppActions.SignOutGoogle
}

export interface SignOutGoogleSuccessAction {
  type: typeof AppActions.SignOutGoogleSuccess
}

export type AppActionTypes =
  | InitAppAction
  | InitAppSuccessAction
  | InitAppFailureAction
  | OnboardedAction
  | StartedOnboardingAction
  | SignInGoogleAction
  | SignInGoogleSuccessAction
  | SignOutGoogleAction
