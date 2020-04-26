import * as firebaseSelectors from './BrowseTemplates.firebase.selectors'
import { initialState, reducer } from './BrowseTemplates.reducer'
import * as selectors from './BrowseTemplates.selectors'
import BrowseTemplateContainer from './containers/BrowseTemplates'

export {
  BrowseTemplateContainer,
  firebaseSelectors,
  selectors,
  initialState,
  reducer,
}
