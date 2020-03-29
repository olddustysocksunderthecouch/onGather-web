import { RouterState } from 'connected-react-router'
import { createSelector } from 'reselect'
import { RootState } from '../../redux/types'
import { NavigationItem } from './types'

const pathNameMap: { [key: string]: NavigationItem } = {
  '/profile': NavigationItem.Profile,
  '/search': NavigationItem.Search,
}

export const selectRouter = (state: RootState): RouterState => state.router

export const selectActiveNavigationItem = createSelector(
  selectRouter,
  (router: RouterState): NavigationItem =>
    pathNameMap[router.location.pathname],
)
