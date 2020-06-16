import { Gathering, User, GatheringDraft } from '../../common/types'

export enum CalendarEventScopeStatus {
  NotFetched = 'NotFetched',
  Fetching = 'Fetching',
  FetchedNotGranted = 'FetchedNotGranted',
  IsRequestingScope = 'IsRequestingScope',
  IsRequestingSignInAndScope = 'IsRequestingSignInAndScope',
  RequestIsGranted = 'RequestIsGranted',
  FetchedIsGranted = 'FetchedIsGranted',
  Error = 'Error',
}

export interface AuthState {
  gatheringDraft: GatheringDraft
  calendarEventScopeStatus: CalendarEventScopeStatus
  error: string
  user: User
}

export enum AuthActions {
  SignInGoogle = '/Auth/SIGN_IN_GOOGLE',
  SignInGoogleSuccess = '/Auth/SIGN_IN_GOOGLE_SUCCESS',
  SignInGoogleFailure = '/Auth/SIGN_IN_GOOGLE_FAILURE',
  SignOutGoogle = '/Auth/SIGN_OUT_GOOGLE',
  SignOutGoogleSuccess = '/Auth/SIGN_OUT_GOOGLE_SUCCESS',
  SignOutGoogleFailure = '/Auth/SIGN_OUT_GOOGLE_FAILURE',
  FetchScope = '/Auth/FETCH_SCOPE',
  FetchScopeFailure = '/Auth/FETCH_SCOPE_FAILURE',
  ScopeFetchedNotGranted = '/Auth/SCOPE_FETCHED_NOT_GRANTED',
  ScopeFetchedIsGranted = '/Auth/SCOPE_FETCHED_IS_GRANTED',
  ScopeFetchedError = '/Auth/SCOPE_FETCHED_ERROR',
  GenerateAuthUrl = '/Auth/GENERATE_AUTH_URL',
  GenerateAuthUrlSuccess = '/Auth/GENERATE_AUTH_URL_SUCCESS',
  GenerateAuthUrlFailure = '/Auth/GENERATE_AUTH_URL_FAILURE',
  SignInAndRequestScope = '/Auth/SIGN_IN_AND_REQUEST_SCOPE',
  RequestScope = '/Auth/REQUEST_SCOPE',
  RequestScopeError = '/Auth/REQUEST_SCOPE_ERROR',
  RequestScopeSuccess = '/Auth/REQUEST_SCOPE_SUCCESS',
  RequestingScope = '/Auth/REQUESTING_SCOPE',
  SendCode = '/Auth/SEND_CODE',
  SendCodeSuccess = '/Auth/SEND_CODE_SUCCESS',
  SendCodeFailure = '/Auth/SEND_CODE_FAILURE',
  PurgeAuthState = '/Auth/PURGE_AUTH_STATE',
}

export interface SignInGoogleAction {
  type: typeof AuthActions.SignInGoogle
}

export interface SignInGoogleSuccessAction {
  type: typeof AuthActions.SignInGoogleSuccess
  payload: {
    user: User
  }
}

export interface SignInGoogleFailureAction {
  type: typeof AuthActions.SignInGoogleFailure
  payload: {
    message: string
  }
}

export interface SignOutGoogleAction {
  type: typeof AuthActions.SignOutGoogle
}

export interface SignOutGoogleAction {
  type: typeof AuthActions.SignOutGoogle
}

export interface SignOutGoogleSuccessAction {
  type: typeof AuthActions.SignOutGoogleSuccess
}

export interface SignOutGoogleFailureAction {
  type: typeof AuthActions.SignOutGoogleFailure
  payload: {
    message: string
  }
}

export interface FetchScopeAction {
  type: typeof AuthActions.FetchScope
}

export interface FetchScopeFailureAction {
  type: typeof AuthActions.FetchScopeFailure
  payload: { message: string }
}

export interface ScopeFetchedNotGrantedAction {
  type: typeof AuthActions.ScopeFetchedNotGranted
}

export interface ScopeFetchedIsGrantedAction {
  type: typeof AuthActions.ScopeFetchedIsGranted
}

export interface ScopeFetchedErrorAction {
  type: typeof AuthActions.ScopeFetchedError
  payload: { message: string }
}

export interface GenerateAuthUrlAction {
  type: typeof AuthActions.GenerateAuthUrl
}

export interface GenerateAuthUrlSuccessAction {
  type: typeof AuthActions.GenerateAuthUrlSuccess
  payload: { result: any }
}

export interface GenerateAuthUrlFailureAction {
  type: typeof AuthActions.GenerateAuthUrlFailure
  payload: { message: string }
}

export interface SendCodeAction {
  type: typeof AuthActions.SendCode
  payload: { code: string }
}

export interface RequestScopeAction {
  type: typeof AuthActions.RequestScope
  payload: { gathering: Gathering }
}

export interface RequestScopeErrorAction {
  type: typeof AuthActions.RequestScopeError
  payload: { message: string }
}

export interface RequestingScopeAction {
  type: typeof AuthActions.RequestingScope
}

export interface SignInAndRequestScopeAction {
  type: typeof AuthActions.SignInAndRequestScope
  payload: { templateEditSend: Gathering }
}

export interface SendCodeSuccessAction {
  type: typeof AuthActions.SendCodeSuccess
  payload: { result: any }
}

export interface SendCodeFailureAction {
  type: typeof AuthActions.SendCodeFailure
  payload: { message: string }
}

export interface PurgeAuthStateAction {
  type: typeof AuthActions.PurgeAuthState
}

export type AuthActionTypes =
  | SignInGoogleAction
  | SignInGoogleSuccessAction
  | SignInGoogleFailureAction
  | SignOutGoogleAction
  | SignOutGoogleSuccessAction
  | SignOutGoogleFailureAction
  | FetchScopeAction
  | FetchScopeFailureAction
  | ScopeFetchedNotGrantedAction
  | ScopeFetchedIsGrantedAction
  | ScopeFetchedErrorAction
  | GenerateAuthUrlAction
  | GenerateAuthUrlSuccessAction
  | GenerateAuthUrlFailureAction
  | SignInAndRequestScopeAction
  | RequestScopeAction
  | RequestingScopeAction
  | RequestScopeErrorAction
  | SendCodeAction
  | SendCodeSuccessAction
  | SendCodeFailureAction
  | PurgeAuthStateAction
