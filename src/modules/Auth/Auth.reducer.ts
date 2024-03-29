import {
  AuthActions,
  AuthActionTypes,
  AuthState,
  CalendarEventScopeStatus,
} from './types'

export const initialState: AuthState = {
  user: {
    uid: '',
    displayName: '',
    photoURL: '',
    email: '',
  },
  calendarEventScopeStatus: CalendarEventScopeStatus.NotFetched,
  error: '',
  gatheringDraft: {
    title: '',
    templateId: '',
    personalizedDescription: '',
    whatYouDo: '',
    howYouDo: '',
    inviteeEmails: [],
    startTimestamp: new Date().toISOString(),
    duration: '',
    callProvider: '',
    callUrl: '',
  },
}

export function reducer(
  state = initialState,
  action: AuthActionTypes,
): AuthState {
  switch (action.type) {
    case AuthActions.SignInGoogleSuccess:
      return {
        ...state,
        user: action.payload.user,
      }
    case AuthActions.SignOutGoogleSuccess:
      return {
        ...state,
        user: initialState.user,
      }
    case AuthActions.FetchScope:
      return {
        ...state,
        calendarEventScopeStatus: CalendarEventScopeStatus.Fetching,
        error: '',
      }
    case AuthActions.FetchScopeFailure:
      return {
        ...state,
        calendarEventScopeStatus: CalendarEventScopeStatus.Error,
        error: action.payload.message,
      }
    case AuthActions.ScopeFetchedNotGranted:
      return {
        ...state,
        calendarEventScopeStatus: CalendarEventScopeStatus.FetchedNotGranted,
      }
    case AuthActions.ScopeFetchedIsGranted:
      return {
        ...state,
        calendarEventScopeStatus: CalendarEventScopeStatus.FetchedIsGranted,
      }
    case AuthActions.ScopeFetchedError:
      return {
        ...state,
        calendarEventScopeStatus: CalendarEventScopeStatus.Error,
        error: action.payload.message,
      }
    case AuthActions.SignInAndRequestScope:
      return {
        ...state,
        calendarEventScopeStatus:
          CalendarEventScopeStatus.IsRequestingSignInAndScope,
        gatheringDraft: action.payload.templateEditSend,
      }
    case AuthActions.RequestScope:
      return {
        ...state,
        calendarEventScopeStatus: CalendarEventScopeStatus.IsRequestingScope,
        gatheringDraft: action.payload.gathering,
      }
    case AuthActions.RequestScopeError:
      return {
        ...state,
        calendarEventScopeStatus: CalendarEventScopeStatus.Error,
        error: action.payload.message,
      }
    case AuthActions.SendCode:
      return {
        ...state,
        calendarEventScopeStatus: CalendarEventScopeStatus.RequestIsGranted,
        error: '',
      }
    case AuthActions.PurgeAuthState:
      return {
        ...initialState,
      }
  }
  return state
}
