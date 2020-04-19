import { createSelector } from 'reselect'
import { RootState } from '../../redux/types'

export const selectFirebase = (state: RootState): any => state.firebase

export const selectAuth = createSelector(
  selectFirebase,
  (firebase: any): any => firebase.profile,
)

export const selectUid = createSelector(
  selectAuth,
  (profile: any): any => profile.uid,
)

export const selectPhotoURL = createSelector(
  selectAuth,
  (profile: any): any => profile.photoURL,
)

export const selectDisplayName = createSelector(
  selectAuth,
  (profile: any): any => profile.displayName,
)
