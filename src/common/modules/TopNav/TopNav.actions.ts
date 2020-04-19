import {
  NavigateToCreateTemplateAction,
  NavigateToHomeAction,
  NavigateToUserTemplatesAction,
  TopNavActions,
} from './types'

export const navigateToHome = (): NavigateToHomeAction => ({
  type: TopNavActions.NavigateToHome,
})

export const navigateToUserTemplates = (): NavigateToUserTemplatesAction => ({
  type: TopNavActions.NavigateToUserTemplates,
})

export const navigateToCreateTemplate = (): NavigateToCreateTemplateAction => ({
  type: TopNavActions.NavigateToCreateTemplate,
})
