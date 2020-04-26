import { createSelector } from 'reselect'
import { selectors as firestoreSelectors } from '../../common/modules/firestore'
import { Template } from '../../common/types'
import { selectActiveCategory } from './BrowseTemplates.selectors'

const arrayResult = (data: any): Template[] => {
  return Object.keys(data).map((id) => {
    return { templateId: id, ...data[id] }
  })
}

const filterByCategory = (
  data: Template[],
  selectedCategory: string,
): Template[] =>
  data.filter((template: Template) => template.category! === selectedCategory)

export const selectTemplateForCategory = createSelector(
  firestoreSelectors.selectData,
  selectActiveCategory,
  (data: any, activeCategory: string): Template[] => {
    if (data.browseTemplates) {
      const arr = arrayResult(data.browseTemplates)
      return filterByCategory(arr, activeCategory)
    } else {
      return []
    }
  },
)
