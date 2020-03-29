import { RootState } from '../../common/redux/types'
import { createSelector } from 'reselect'
import { AppState } from './types'

export const selectApp = (state: RootState): AppState => state.app

export const selectAppLoaded = createSelector(
  selectApp,
  (app: AppState): boolean => app.loaded,
)

export const selectAppLoading = createSelector(
  selectApp,
  (app: AppState): boolean => app.loading,
)
