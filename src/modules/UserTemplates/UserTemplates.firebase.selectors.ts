import { createSelector } from 'reselect'
import { selectors as firebaseSelectors } from '../../common/modules/firebase'
import { selectors as firestoreSelectors } from '../../common/modules/firestore'

const arrayResult = (data: any): any => {
  return Object.keys(data).map((id) => {
    return { templateId: id, ...data[id] }
  })
}

export const selectUserTemplateDrafts = createSelector(
  firebaseSelectors.selectUid,
  firestoreSelectors.selectQueries,
  (uid: string, queries: any): any => {
    if (uid) {
      const query = `templates?where=uid:==:${uid}`
      if (queries[query].data != undefined) {
        const data = queries[query].data
        console.log(arrayResult(data))
        return arrayResult(data)
      } else {
        return []
      }
    } else {
      return []
    }
  },
)
