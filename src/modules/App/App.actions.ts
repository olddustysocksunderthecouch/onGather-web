import {
  AppActions,
  InitAppAction,
  InitAppFailureAction,
  InitAppSuccessAction,
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
