import { trackEvent, trackException } from '@redux-beacon/google-analytics'
import { UserTemplatesActions } from './types'

export default {
  [UserTemplatesActions.SaveDraftTemplate]: trackEvent((action) => ({
    category: 'UserTemplates',
    action: 'SaveDraftTemplate',
    label: `${action.payload.template.templateId}, ${action.payload.template.title}`,
  })),
  [UserTemplatesActions.SaveDraftTemplateFailure]: trackException((action) => ({
    exDescription: `UserTemplates - SaveDraftTemplateFailure - ${action.payload.message}`,
    exFatal: true,
  })),
  [UserTemplatesActions.PublishTemplate]: trackEvent((action) => ({
    category: 'UserTemplates',
    action: 'PublishTemplate',
    label: `${action.payload.template.templateId}, ${action.payload.template.title}`,
  })),
  [UserTemplatesActions.PublishTemplateFailure]: trackException((action) => ({
    exDescription: `UserTemplates - PublishTemplateFailure - ${action.payload.message}`,
    exFatal: true,
  })),
  [UserTemplatesActions.SearchForImages]: trackEvent((action) => ({
    category: 'UserTemplates',
    action: 'SearchForImages',
    label: action.payload.searchTerm,
  })),
  [UserTemplatesActions.SearchForImagesFailure]: trackException((action) => ({
    exDescription: `UserTemplates - SearchForImagesFailure - ${action.payload.message}`,
    exFatal: true,
  })),
}
