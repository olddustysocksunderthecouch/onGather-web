import {
  AppActions,
  InitAppAction,
  InitAppFailureAction,
  InitAppSuccessAction,
  OnboardedAction,
  StartedOnboardingAction,
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
