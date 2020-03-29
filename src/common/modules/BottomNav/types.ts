export enum NavigationItem {
  Search = 'search',
  Profile = 'profile',
}

export enum BottomNavActions {
  NavigateToSearch = 'moments/BottomNav/NAVIGATE_TO_SEARCH',
  NavigateToProfile = 'moments/BottomNav/NAVIGATE_TO_PROFILE',
}

export interface NavigateToSearchAction {
  type: typeof BottomNavActions.NavigateToSearch
}

export interface NavigateToProfileAction {
  type: typeof BottomNavActions.NavigateToProfile
}

export type BottomNavActionTypes =
  | NavigateToSearchAction
  | NavigateToProfileAction
