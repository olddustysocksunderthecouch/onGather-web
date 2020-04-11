import {
  CreateTemplateActions,
  SaveDraftTemplateAction,
  PublishTemplateAction,
  SaveDraftTemplateSuccessAction,
} from './types'

export const saveDraftTemplate = (): SaveDraftTemplateAction => ({
  type: CreateTemplateActions.SaveDraftTemplate,
})

export const saveDraftTemplateSuccess = (): SaveDraftTemplateSuccessAction => ({
  type: CreateTemplateActions.SaveDraftTemplateSuccess,
})

export const publishTemplate = (): PublishTemplateAction => ({
  type: CreateTemplateActions.PublishTemplate,
})
