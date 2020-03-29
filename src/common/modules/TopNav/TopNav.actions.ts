import {
  TopNavActions,
  NavigateToProfileAction,
  NavigateToSearchAction,
} from './types'

export const navigateToSearch = (): NavigateToSearchAction => ({
  type: TopNavActions.NavigateToSearch,
})

export const navigateToProfile = (): NavigateToProfileAction => ({
  type: TopNavActions.NavigateToProfile,
})
