import {
  AppActions,
  InitAppAction,
  InitAppFailureAction,
  InitAppSuccessAction,
  SignInGoogleAction,
  SignInGoogleFailureAction,
  SignInGoogleSuccessAction,
  SignOutGoogleAction,
  SignOutGoogleFailureAction,
  SignOutGoogleSuccessAction,
  User,
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

export const signInGoogle = (): SignInGoogleAction => ({
  type: AppActions.SignInGoogle,
})

export const signInGoogleSuccess = (user: User): SignInGoogleSuccessAction => ({
  type: AppActions.SignInGoogleSuccess,
  payload: {
    user,
  },
})

export const signInGoogleFailure = (
  message: string,
): SignInGoogleFailureAction => ({
  type: AppActions.SignInGoogleFailure,
  payload: {
    message,
  },
})

export const signOutGoogle = (): SignOutGoogleAction => ({
  type: AppActions.SignOutGoogle,
})

export const signOutGoogleSuccess = (): SignOutGoogleSuccessAction => ({
  type: AppActions.SignOutGoogleSuccess,
})

export const signOutGoogleFailure = (
  message: string,
): SignOutGoogleFailureAction => ({
  type: AppActions.SignOutGoogleFailure,
  payload: {
    message,
  },
})
