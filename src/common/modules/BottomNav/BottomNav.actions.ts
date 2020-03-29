import {
  BottomNavActions,
  NavigateToProfileAction,
  NavigateToSearchAction,
} from './types'

export const navigateToSearch = (): NavigateToSearchAction => ({
  type: BottomNavActions.NavigateToSearch,
})

export const navigateToProfile = (): NavigateToProfileAction => ({
  type: BottomNavActions.NavigateToProfile,
})
