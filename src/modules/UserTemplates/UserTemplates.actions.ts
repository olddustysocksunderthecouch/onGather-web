import {
  UserTemplatesActions,
  PublishTemplateAction,
  PublishTemplateFailureAction,
  PublishTemplateSuccessAction,
  SaveDraftTemplateAction,
  SaveDraftTemplateFailureAction,
  SaveDraftTemplateSuccessAction,
  SetEditorTemplateDataAction,
} from './types'
import { TemplateCreation } from '../../common/types'

export const setEditorTemplateData = (
  template: TemplateCreation,
): SetEditorTemplateDataAction => ({
  type: UserTemplatesActions.SetEditorTemplateData,
  payload: {
    template,
  },
})

export const saveDraftTemplate = (): SaveDraftTemplateAction => ({
  type: UserTemplatesActions.SaveDraftTemplate,
})

export const saveDraftTemplateSuccess = (): SaveDraftTemplateSuccessAction => ({
  type: UserTemplatesActions.SaveDraftTemplateSuccess,
})

export const saveDraftTemplateFailure = (
  message: string,
): SaveDraftTemplateFailureAction => ({
  type: UserTemplatesActions.SaveDraftTemplateFailure,
  payload: {
    message,
  },
})

export const publishTemplate = (): PublishTemplateAction => ({
  type: UserTemplatesActions.PublishTemplate,
})

export const publishTemplateSuccess = (): PublishTemplateSuccessAction => ({
  type: UserTemplatesActions.PublishTemplateSuccess,
})

export const publishTemplateFailure = (
  message: string,
): PublishTemplateFailureAction => ({
  type: UserTemplatesActions.PublishTemplateFailure,
  payload: {
    message,
  },
})
