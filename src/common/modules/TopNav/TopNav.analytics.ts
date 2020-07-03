import { trackEvent } from '@redux-beacon/google-analytics'
import { TopNavActions } from './types'

export default {
  [TopNavActions.NavigateToHome]: trackEvent(() => ({
    category: 'TopNav',
    action: 'NavigateToHome',
  })),
}
