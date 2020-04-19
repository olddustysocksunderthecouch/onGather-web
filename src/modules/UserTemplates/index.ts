import CreateTemplateContainer from './containers/CreateTemplate'
import UserTemplatesContainer from './containers/UserTemplates'
import * as actions from './UserTemplates.actions'
import * as epics from './UserTemplates.epics'
import { initialState, reducer } from './UserTemplates.reducer'
import * as selectors from './UserTemplates.selectors'
import * as firebaseSelectors from './UserTemplates.firebase.selectors'

export {
  actions,
  epics,
  initialState,
  reducer,
  selectors,
  firebaseSelectors,
  CreateTemplateContainer,
  UserTemplatesContainer,
}
