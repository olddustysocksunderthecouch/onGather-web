import {
  CreateTemplateActions,
  PublishTemplateAction,
  PublishTemplateFailureAction,
  PublishTemplateSuccessAction,
  SaveDraftTemplateAction,
  SaveDraftTemplateFailureAction,
  SaveDraftTemplateSuccessAction,
  SetEditorTemplateDataAction,
  Template,
} from './types'

export const setEditorTemplateData = (
  template: Template,
): SetEditorTemplateDataAction => ({
  type: CreateTemplateActions.SetEditorTemplateData,
  payload: {
    template,
  },
})

export const saveDraftTemplate = (): SaveDraftTemplateAction => ({
  type: CreateTemplateActions.SaveDraftTemplate,
})

export const saveDraftTemplateSuccess = (): SaveDraftTemplateSuccessAction => ({
  type: CreateTemplateActions.SaveDraftTemplateSuccess,
})

export const saveDraftTemplateFailure = (
  message: string,
): SaveDraftTemplateFailureAction => ({
  type: CreateTemplateActions.SaveDraftTemplateFailure,
  payload: {
    message,
  },
})

export const publishTemplate = (): PublishTemplateAction => ({
  type: CreateTemplateActions.PublishTemplate,
})

export const publishTemplateSuccess = (): PublishTemplateSuccessAction => ({
  type: CreateTemplateActions.PublishTemplateSuccess,
})

export const publishTemplateFailure = (
  message: string,
): PublishTemplateFailureAction => ({
  type: CreateTemplateActions.PublishTemplateFailure,
  payload: {
    message,
  },
})
