import { createSelector } from 'reselect'
import { RootState } from '../../common/redux/types'
import { BrowseTemplatesState } from './types'

export const selectBrowseTemplate = (state: RootState): BrowseTemplatesState =>
  state.browseTemplates

export const selectActiveCategory = createSelector(
  selectBrowseTemplate,
  (browseTemplates: BrowseTemplatesState): string =>
    browseTemplates.activeCategory,
)
