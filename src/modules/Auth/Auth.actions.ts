import { Gathering, User } from '../../common/types'
import {
  AuthActions,
  FetchScopeAction,
  FetchScopeFailureAction,
  GenerateAuthUrlAction,
  GenerateAuthUrlFailureAction,
  GenerateAuthUrlSuccessAction,
  PurgeAuthStateAction,
  RequestingScopeAction,
  RequestScopeAction,
  ScopeFetchedErrorAction,
  ScopeFetchedIsGrantedAction,
  ScopeFetchedNotGrantedAction,
  SendCodeAction,
  SendCodeFailureAction,
  SendCodeSuccessAction,
  SignInAndRequestScopeAction,
  SignInGoogleAction,
  SignInGoogleSuccessAction,
  SignInGoogleFailureAction,
  SignOutGoogleAction,
  SignOutGoogleSuccessAction,
  SignOutGoogleFailureAction,
  RequestScopeErrorAction,
} from './types'

export const signInGoogle = (): SignInGoogleAction => ({
  type: AuthActions.SignInGoogle,
})

export const signInGoogleSuccess = (user: User): SignInGoogleSuccessAction => ({
  type: AuthActions.SignInGoogleSuccess,
  payload: {
    user,
  },
})

export const signInGoogleFailure = (
  message: string,
): SignInGoogleFailureAction => ({
  type: AuthActions.SignInGoogleFailure,
  payload: {
    message,
  },
})

export const signOutGoogle = (): SignOutGoogleAction => ({
  type: AuthActions.SignOutGoogle,
})

export const signOutGoogleSuccess = (): SignOutGoogleSuccessAction => ({
  type: AuthActions.SignOutGoogleSuccess,
})

export const signOutGoogleFailure = (
  message: string,
): SignOutGoogleFailureAction => ({
  type: AuthActions.SignOutGoogleFailure,
  payload: {
    message,
  },
})

export const fetchScopes = (): FetchScopeAction => ({
  type: AuthActions.FetchScope,
})

export const fetchScopesFailure = (
  message: string,
): FetchScopeFailureAction => ({
  type: AuthActions.FetchScopeFailure,
  payload: { message },
})

export const scopeFetchedNotGranted = (): ScopeFetchedNotGrantedAction => ({
  type: AuthActions.ScopeFetchedNotGranted,
})

export const requestSignInAndScope = (): ScopeFetchedNotGrantedAction => ({
  type: AuthActions.ScopeFetchedNotGranted,
})

export const scopeFetchedIsGranted = (): ScopeFetchedIsGrantedAction => ({
  type: AuthActions.ScopeFetchedIsGranted,
})

export const scopeFetchedError = (
  message: string,
): ScopeFetchedErrorAction => ({
  type: AuthActions.ScopeFetchedError,
  payload: { message },
})

export const signInAndRequestScope = (
  templateEditSend: Gathering,
): SignInAndRequestScopeAction => ({
  type: AuthActions.SignInAndRequestScope,
  payload: { templateEditSend },
})

export const requestScope = (gathering: Gathering): RequestScopeAction => ({
  type: AuthActions.RequestScope,
  payload: { gathering },
})

export const requestingScope = (): RequestingScopeAction => ({
  type: AuthActions.RequestingScope,
})

export const requestScopeError = (
  message: string,
): RequestScopeErrorAction => ({
  type: AuthActions.RequestScopeError,
  payload: {
    message,
  },
})
export const generateAuthUrl = (): GenerateAuthUrlAction => ({
  type: AuthActions.GenerateAuthUrl,
})

export const generateAuthUrlSuccess = (
  result: any,
): GenerateAuthUrlSuccessAction => ({
  type: AuthActions.GenerateAuthUrlSuccess,
  payload: { result },
})

export const generateAuthUrlFailure = (
  message: string,
): GenerateAuthUrlFailureAction => ({
  type: AuthActions.GenerateAuthUrlFailure,
  payload: {
    message,
  },
})

export const sendCode = (code: string): SendCodeAction => ({
  type: AuthActions.SendCode,
  payload: { code },
})

export const sendCodeSuccess = (result: any): SendCodeSuccessAction => ({
  type: AuthActions.SendCodeSuccess,
  payload: { result },
})

export const sendCodeFailure = (message: string): SendCodeFailureAction => ({
  type: AuthActions.SendCodeFailure,
  payload: {
    message,
  },
})

export const purgeAuthState = (): PurgeAuthStateAction => ({
  type: AuthActions.PurgeAuthState,
})
