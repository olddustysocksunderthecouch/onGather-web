export enum NavigationItem {
  Create = 'Create',
  Templates = 'Templates',
  SignIn = 'Sign In',
  SignOut = 'Sign Out',
  SaveDraftTemplate = 'Save Draft',
  PublishTemplate = 'Publish',
}

export enum TopNavType {
  Home = 'home',
  HomeSignedIn = 'home',
  CreateTemplate = 'createTemplate',
  UserTemplates = 'userTemplates',
}

export enum TopNavActions {
  NavigateToCreateTemplate = '/TopNav/NAVIGATE_TO_CREATE_TEMPLATE',
  NavigateToUserTemplates = '/TopNav/NAVIGATE_TO_USER_TEMPLATES',
  NavigateToHome = '/TopNav/NAVIGATE_TO_HOME',
}

export interface NavigateToHomeAction {
  type: typeof TopNavActions.NavigateToHome
}

export interface NavigateToUserTemplatesAction {
  type: typeof TopNavActions.NavigateToUserTemplates
}

export interface NavigateToCreateTemplateAction {
  type: typeof TopNavActions.NavigateToCreateTemplate
}

export type TopNavActionTypes =
  | NavigateToHomeAction
  | NavigateToUserTemplatesAction
  | NavigateToCreateTemplateAction
