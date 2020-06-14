import { createSelector } from 'reselect'
import { selectors as firestoreSelectors } from '../../common/modules/firestore'
import { Template } from '../../common/types'

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

export const selectSelectedTemplate = createSelector(
  firestoreSelectors.selectData,
  (data: any): any => {
    if (data.selectedTemplate) {
      return arrayResult(data.selectedTemplate)[0]
    } else {
      return {}
    }
  },
)

export const selectCalendarEventScopeIsEnabled = createSelector(
  firestoreSelectors.selectData,
  (data: any): boolean => {
    if (data.user) {
      const flattenedUserObject = Object.values(data.user)[0] as any
      if (flattenedUserObject.scopes) {
        return flattenedUserObject.scopes.includes('calendar.event')
      } else {
        return false
      }
    } else {
      return false
    }
  },
)
