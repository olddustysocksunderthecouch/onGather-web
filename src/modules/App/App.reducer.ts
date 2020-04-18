import { AppActions, AppActionTypes, AppState } from './types'

export const initialState: AppState = {
  loaded: false,
  loading: false,
  signedIn: false,
  user: {
    uid: '',
    displayName: '',
    photoUrl: '',
    email: '',
  },
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
    case AppActions.SignInGoogleSuccess:
      return {
        ...state,
        signedIn: true,
        user: action.payload.user,
      }
    case AppActions.SignOutGoogleSuccess:
      return {
        ...state,
        signedIn: false,
        user: initialState.user,
      }
  }
  return state
}
