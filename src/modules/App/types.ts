export interface AppState {
  loaded: boolean
  loading: boolean
  onboarded: boolean
}

export enum AppActions {
  InitApp = 'moments/App/INIT_APP',
  InitAppSuccess = 'moments/App/INIT_APP_SUCCESS',
  InitAppFailure = 'moments/App/INIT_APP_FAILURE',
  PersistRehydrate = 'persist/REHYDRATE',
  Onboarded = 'moments/App/ONBOARDED',
  StartedOnboarding = 'moments/App/STARTED_ONBOARDING',
  SignInGoogle = 'moments/App/SIGN_IN_GOOGLE',
  SignInGoogleSuccess = 'moments/App/SIGN_IN_GOOGLE_SUCCESS',
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

export type AppActionTypes =
  | InitAppAction
  | InitAppSuccessAction
  | InitAppFailureAction
  | OnboardedAction
  | StartedOnboardingAction
  | SignInGoogleAction
  | SignInGoogleSuccessAction
