import { BrowseTemplatesActions, SelectActiveCategoryAction } from './types'

export const selectActiveCategory = (
  category: string,
): SelectActiveCategoryAction => ({
  type: BrowseTemplatesActions.SelectActiveCategory,
  payload: {
    category,
  },
})
