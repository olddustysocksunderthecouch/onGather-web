import { createSelector } from 'reselect'
import { selectors as firestoreSelectors } from '../../common/modules/firestore'
import { Template } from '../../common/types'
import { selectActiveCategory } from './BrowseTemplates.selectors'

function shuffleArray(array: any): any {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

const arrayResult = (data: any): Template[] => {
  const array = Object.keys(data).map((id) => {
    return { templateId: id, ...data[id] }
  })
  return array.reduce(
    (accumulator: any, currentValue: Template): Template[] => {
      if (currentValue) {
        accumulator.push(currentValue)
      }
      return accumulator
    },
    [],
  )
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
      const templates = arrayResult(data.browseTemplates)
      return activeCategory === 'All'
        ? shuffleArray(templates)
        : filterByCategory(templates, activeCategory)
    } else {
      return []
    }
  },
)
