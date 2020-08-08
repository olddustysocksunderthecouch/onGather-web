import { createSelector } from 'reselect'
import { RootState } from '../../redux/types'

export const selectFirebase = (state: RootState): any => state.firebase

export const selectProfile = createSelector(
  selectFirebase,
  (firebase: any): any => firebase.profile,
)

export const selectAuth = createSelector(
  selectFirebase,
  (firebase: any): any => firebase.auth,
)

export const selectIsAuthenticated = createSelector(
  selectAuth,
  (auth: any): boolean => !auth.isEmpty,
)

export const selectIsAuthenticationLoading = createSelector(
  selectAuth,
  (auth: any): boolean => !auth.isLoaded,
)

export const selectUid = createSelector(
  selectAuth,
  (auth: any): string | null => auth.uid,
)

export const selectEmail = createSelector(
  selectAuth,
  (auth: any): string | null => auth.email,
)

export const selectPhotoURL = createSelector(
  selectAuth,
  (auth: any): any => auth.photoURL,
)

export const selectDisplayName = createSelector(
  selectAuth,
  (auth: any): any => auth.displayName,
)
