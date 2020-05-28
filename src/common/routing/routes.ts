import { UserTemplatesActions } from '../../modules/UserTemplates/types'
import { TopNavActions } from '../modules/TopNav/types'

export const actionRouteMap = {
  [TopNavActions.NavigateToCreateTemplate]: '/create-template',
  [TopNavActions.NavigateToHome]: '/',
  [TopNavActions.NavigateToUserTemplates]: '/user-templates',
  [UserTemplatesActions.PublishTemplateSuccess]: '/user-templates',
  [UserTemplatesActions.SaveDraftTemplateSuccess]: '/user-templates',
}
