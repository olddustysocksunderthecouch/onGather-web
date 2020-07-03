import { trackPageView } from '@redux-beacon/google-analytics'
import { LOCATION_CHANGE } from 'connected-react-router'
import { analytics as authAnalytics } from '../../modules/Auth'
import { analytics as browseTemplatesAnalytics } from '../../modules/BrowseTemplates'
import { analytics as viewUtilizeTemplateAnalytics } from '../../modules/ViewUtilizeTemplate'
import { analytics as userTemplatesAnalytics } from '../../modules/UserTemplates'
import { analytics as topNavAnalytics } from '../modules/TopNav'

export const eventsMap = {
  [LOCATION_CHANGE]: trackPageView((action) => ({
    page: action.payload.location.pathname,
  })),
  ...topNavAnalytics,
  ...authAnalytics,
  ...browseTemplatesAnalytics,
  ...userTemplatesAnalytics,
  ...viewUtilizeTemplateAnalytics,
}
