export enum NavigationItem {
  Search = 'search',
  Profile = 'profile',
}

export enum TopNavActions {
  NavigateToSearch = 'moments/TopNav/NAVIGATE_TO_SEARCH',
  NavigateToProfile = 'moments/TopNav/NAVIGATE_TO_PROFILE',
}

export interface NavigateToSearchAction {
  type: typeof TopNavActions.NavigateToSearch
}

export interface NavigateToProfileAction {
  type: typeof TopNavActions.NavigateToProfile
}

export type TopNavActionTypes = NavigateToSearchAction | NavigateToProfileAction
