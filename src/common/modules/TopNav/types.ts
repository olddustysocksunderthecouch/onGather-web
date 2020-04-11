export enum NavigationItem {
  Create = 'Create',
  SignIn = 'Sign In',
  SignOut = 'Sign Out',
  SaveDraftTemplate = 'Save Draft',
  PublishTemplate = 'Publish',
}

export enum TopNavType {
  Home = 'home',
  HomeSignedIn = 'home',
  CreateTemplate = 'createTemplate',
}

export enum TopNavActions {
  NavigateToCreateTemplate = 'moments/TopNav/NAVIGATE_TO_CREATE_TEMPLATE',
  NavigateToHome = 'moments/TopNav/NAVIGATE_TO_HOME',
}

export interface NavigateToHomeAction {
  type: typeof TopNavActions.NavigateToHome
}

export interface NavigateToCreateTemplateAction {
  type: typeof TopNavActions.NavigateToCreateTemplate
}

export type TopNavActionTypes = NavigateToCreateTemplateAction
