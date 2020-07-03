import { trackEvent } from '@redux-beacon/google-analytics'
import { BrowseTemplatesActions } from './types'

export default {
  [BrowseTemplatesActions.SelectActiveCategory]: trackEvent((action) => ({
    category: 'BrowseTemplates',
    action: 'SelectActiveCategory',
    label: action.payload.category,
  })),
}
