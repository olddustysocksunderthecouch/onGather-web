import CreateTemplateContainer from './containers/CreateTemplate'
import * as actions from './CreateTemplate.actions'
import * as epics from './CreateTemplate.epics'
import { initialState, reducer } from './CreateTemplate.reducer'
import * as selectors from './CreateTemplate.selectors'

export {
  actions,
  epics,
  initialState,
  reducer,
  selectors,
  CreateTemplateContainer,
}
