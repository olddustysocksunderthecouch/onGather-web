import {
  NavigateToCreateTemplateAction,
  NavigateToHomeAction,
  TopNavActions,
} from './types'

export const navigateToHome = (): NavigateToHomeAction => ({
  type: TopNavActions.NavigateToHome,
})

export const navigateToCreateTemplate = (): NavigateToCreateTemplateAction => ({
  type: TopNavActions.NavigateToCreateTemplate,
})
