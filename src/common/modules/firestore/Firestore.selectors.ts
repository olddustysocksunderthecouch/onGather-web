import { createSelector } from 'reselect'
import { RootState } from '../../redux/types'

export const selectFirestore = (state: RootState): any => state.firestore

export const selectQueries = createSelector(
  selectFirestore,
  (firestore: any): any => firestore.queries,
)
