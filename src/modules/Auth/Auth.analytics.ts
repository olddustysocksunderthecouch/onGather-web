import { trackEvent, trackException } from '@redux-beacon/google-analytics'
import { AuthActions } from './types'

export default {
  [AuthActions.SignInGoogle]: trackEvent(() => ({
    category: 'Auth',
    action: 'SignInGoogle',
  })),
  [AuthActions.SignInGoogleSuccess]: trackEvent((action) => ({
    category: 'Auth',
    action: 'SignInGoogleSuccess',
    label: action.payload.user.displayName,
  })),
  [AuthActions.SignInGoogleFailure]: trackException(() => ({
    exDescription: 'SignInGoogleFailure',
    exFatal: true,
  })),
  [AuthActions.SendCodeSuccess]: trackEvent(() => ({
    category: 'Auth',
    action: 'SendCodeSuccess',
  })),
  [AuthActions.SendCodeFailure]: trackException((action) => ({
    exDescription: `SendCodeFailure - ${action.payload.message}`,
    exFatal: true,
  })),
  [AuthActions.ScopeFetchedError]: trackException((action) => ({
    exDescription: `ScopeFetchedError - ${action.payload.message}`,
    exFatal: true,
  })),
  [AuthActions.RequestScopeError]: trackException((action) => ({
    exDescription: `RequestScopeError - ${action.payload.message}`,
    exFatal: true,
  })),
}
