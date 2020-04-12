import CreateTemplateContainer from './containers/CreateTemplate'
import * as actions from './UserTemplates.actions'
import * as epics from './UserTemplates.epics'
import { initialState, reducer } from './UserTemplates.reducer'
import * as selectors from './UserTemplates.selectors'

export {
  actions,
  epics,
  initialState,
  reducer,
  selectors,
  CreateTemplateContainer,
}
