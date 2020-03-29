import { AppActions, AppActionTypes, AppState } from './types'

export const initialState: AppState = {
  loaded: false,
  loading: false,
  onboarded: false,
}

export function reducer(
  state = initialState,
  action: AppActionTypes,
): AppState {
  switch (action.type) {
    case AppActions.InitApp:
      return {
        ...state,
        loading: true,
        loaded: false,
      }
    case AppActions.InitAppSuccess:
      return {
        ...state,
        loaded: true,
        loading: false,
      }
    case AppActions.InitAppFailure:
      return {
        ...state,
        loaded: false,
        loading: false,
      }
    case AppActions.Onboarded:
      return {
        ...state,
        onboarded: true,
      }
  }
  return state
}
