import { TopNavActions } from '../modules/TopNav/types'
import { UserTemplatesActions } from '../../modules/UserTemplates/types'

export const actionRouteMap = {
  [TopNavActions.NavigateToCreateTemplate]: '/create-template',
  [TopNavActions.NavigateToHome]: '/',
  [TopNavActions.NavigateToUserTemplates]: '/user-templates',
  [UserTemplatesActions.PublishTemplateSuccess]: '/user-templates',
  [UserTemplatesActions.SaveDraftTemplateSuccess]: '/user-templates',
}
