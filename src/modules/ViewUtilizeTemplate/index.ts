import UtilizeTemplateContainer from './containers/UtilizeTemplate'
import ViewTemplateContainer from './containers/ViewTemplate'
import * as actions from './ViewUseTemplate.actions'
import analytics from './ViewUseTemplate.analytics'
import * as epics from './ViewUseTemplate.epics'
import * as firebaseSelectors from './ViewUseTemplate.firebase.selectors'
import { initialState, reducer } from './ViewUseTemplate.reducer'
import * as selectors from './ViewUseTemplate.selectors'

export {
  actions,
  analytics,
  epics,
  firebaseSelectors,
  initialState,
  reducer,
  selectors,
  UtilizeTemplateContainer,
  ViewTemplateContainer,
}
