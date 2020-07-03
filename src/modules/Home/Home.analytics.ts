import { trackEvent } from '@redux-beacon/google-analytics'
import { HomeActions } from './types'

export default {
  [HomeActions.BrowseButtonClicked]: trackEvent((action) => ({
    category: 'Home',
    action: 'BrowseButtonClicked',
    label: action.payload.buttonDescription,
  })),
}
