export interface AppState {
  loaded: boolean
  loading: boolean
}

export enum AppActions {
  InitApp = '/App/INIT_APP',
  InitAppSuccess = '/App/INIT_APP_SUCCESS',
  InitAppFailure = '/App/INIT_APP_FAILURE',
  PersistRehydrate = 'persist/REHYDRATE',
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

export type AppActionTypes =
  | InitAppAction
  | InitAppSuccessAction
  | InitAppFailureAction
