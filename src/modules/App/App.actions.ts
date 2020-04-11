import {
  AppActions,
  InitAppAction,
  InitAppFailureAction,
  InitAppSuccessAction,
  OnboardedAction,
  SignInGoogleAction,
  SignInGoogleSuccessAction,
  StartedOnboardingAction,
  SignOutGoogleAction,
  SignOutGoogleSuccessAction,
} from './types'

export const initApp = (): InitAppAction => ({
  type: AppActions.InitApp,
})

export const initAppSuccess = (): InitAppSuccessAction => ({
  type: AppActions.InitAppSuccess,
})

export const initAppFailure = (): InitAppFailureAction => ({
  type: AppActions.InitAppFailure,
})

export const startedOnboarding = (): StartedOnboardingAction => ({
  type: AppActions.StartedOnboarding,
})

export const onboarded = (): OnboardedAction => ({
  type: AppActions.Onboarded,
})

export const signInGoogle = (): SignInGoogleAction => ({
  type: AppActions.SignInGoogle,
})

export const signInGoogleSuccess = (): SignInGoogleSuccessAction => ({
  type: AppActions.SignInGoogleSuccess,
})

export const signOutGoogle = (): SignOutGoogleAction => ({
  type: AppActions.SignOutGoogle,
})

export const signOutGoogleSuccess = (): SignOutGoogleSuccessAction => ({
  type: AppActions.SignOutGoogleSuccess,
})
