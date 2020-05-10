import { TemplateCreation, TemplateFirestoreResult } from '../../common/types'
import {
  CreateNewTemplateAction,
  CreateNewTemplateFailureAction,
  CreateNewTemplateSuccessAction,
  EditExistingTemplateAction,
  PublishTemplateAction,
  PublishTemplateFailureAction,
  PublishTemplateSuccessAction,
  SaveDraftTemplateAction,
  SaveDraftTemplateFailureAction,
  SaveDraftTemplateSuccessAction,
  SetEditorTemplateDataAction,
  SetExistingTemplateEditorDataAction,
  UploadImageAction,
  UploadImageFailureAction,
  UploadImageSuccessAction,
  UserTemplatesActions,
} from './types'

export const createNewTemplate = (): CreateNewTemplateAction => ({
  type: UserTemplatesActions.CreateNewTemplate,
})

export const createNewTemplateSuccess = (
  templateId: string,
): CreateNewTemplateSuccessAction => ({
  type: UserTemplatesActions.CreateNewTemplateSuccess,
  payload: { templateId },
})

export const createNewTemplateFailure = (
  message: string,
): CreateNewTemplateFailureAction => ({
  type: UserTemplatesActions.CreateNewTemplateFailure,
  payload: {
    message,
  },
})

export const editExistingTemplate = (
  templateId: string,
): EditExistingTemplateAction => ({
  type: UserTemplatesActions.EditExistingTemplate,
  payload: { templateId },
})

export const setExistingTemplateEditorData = (
  templateId: string,
  templateData: TemplateFirestoreResult,
): SetExistingTemplateEditorDataAction => ({
  type: UserTemplatesActions.SetExistingTemplateEditorData,
  payload: { templateId, templateData },
})

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

export const uploadImage = (file: File): UploadImageAction => ({
  type: UserTemplatesActions.UploadImage,
  payload: { file },
})

export const uploadImageSuccess = (result: any): UploadImageSuccessAction => ({
  type: UserTemplatesActions.UploadImageSuccess,
  payload: { result },
})

export const uploadImageFailure = (
  message: string,
): UploadImageFailureAction => ({
  type: UserTemplatesActions.UploadImageFailure,
  payload: {
    message,
  },
})
