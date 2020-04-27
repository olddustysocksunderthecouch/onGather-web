import { createSelector } from 'reselect'
import { selectors as firebaseSelectors } from '../../common/modules/firebase'
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

export const selectUserTemplateDrafts = createSelector(
  firebaseSelectors.selectUid,
  firestoreSelectors.selectData,
  (uid: string | null, data: any): any => {
    if (uid && data.userDrafts) {
      return arrayResult(data.userDrafts)
    } else {
      return []
    }
  },
)

export const selectUserTemplatePublished = createSelector(
  firebaseSelectors.selectUid,
  firestoreSelectors.selectData,
  (uid: string | null, data: any): any => {
    if (uid && data.userPublished) {
      return arrayResult(data.userPublished)
    } else {
      return []
    }
  },
)
