import { AppActions, AppActionTypes, AppState } from './types'

export const initialState: AppState = {
  loaded: false,
  loading: false,
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
  }
  return state
}
