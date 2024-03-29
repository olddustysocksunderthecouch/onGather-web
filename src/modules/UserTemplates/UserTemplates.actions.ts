import { TemplateCreation, TemplateFirestoreResult } from '../../common/types'
import {
  CreateNewTemplateAction,
  EditExistingTemplateAction,
  ImageSearchResult,
  PublishTemplateAction,
  PublishTemplateFailureAction,
  PublishTemplateSuccessAction,
  SaveDraftTemplateAction,
  SaveDraftTemplateFailureAction,
  SaveDraftTemplateSuccessAction,
  SearchForImagesAction,
  SearchForImagesFailureAction,
  SearchForImagesSuccessAction,
  SetExistingTemplateEditorDataAction,
  TriggerUnsplashImageDownloadAction,
  TriggerUnsplashImageDownloadFailureAction,
  TriggerUnsplashImageDownloadSuccessAction,
  UploadImageAction,
  UploadImageFailureAction,
  UploadImageSuccessAction,
  UserTemplatesActions,
} from './types'

export const createNewTemplate = (): CreateNewTemplateAction => ({
  type: UserTemplatesActions.CreateNewTemplate,
})

export const editExistingTemplate = (
  templateId: string,
  type: string,
): EditExistingTemplateAction => ({
  type: UserTemplatesActions.EditExistingTemplate,
  payload: { templateId, type },
})

export const setExistingTemplateEditorData = (
  templateId: string,
  templateData: TemplateFirestoreResult,
): SetExistingTemplateEditorDataAction => ({
  type: UserTemplatesActions.SetExistingTemplateEditorData,
  payload: { templateId, templateData },
})

export const saveDraftTemplate = (
  template: TemplateCreation,
): SaveDraftTemplateAction => ({
  type: UserTemplatesActions.SaveDraftTemplate,
  payload: {
    template,
  },
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

export const publishTemplate = (
  template: TemplateCreation,
): PublishTemplateAction => ({
  type: UserTemplatesActions.PublishTemplate,
  payload: {
    template,
  },
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

export const searchForImages = (
  searchTerm: string,
  page: number,
): SearchForImagesAction => ({
  type: UserTemplatesActions.SearchForImages,
  payload: {
    searchTerm,
    page,
  },
})

export const searchForImagesSuccess = (
  searchTerm: string,
  imageSearchResults: ImageSearchResult[],
  totalImagesAvailable: number,
): SearchForImagesSuccessAction => ({
  type: UserTemplatesActions.SearchForImagesSuccess,
  payload: {
    searchTerm,
    imageSearchResults,
    totalImagesAvailable,
  },
})

export const searchForImagesFailure = (
  error: string,
): SearchForImagesFailureAction => ({
  type: UserTemplatesActions.SearchForImagesFailure,
  payload: {
    error,
  },
})

export const triggerUnsplashImageDownload = (
  downloadLink: string,
): TriggerUnsplashImageDownloadAction => ({
  type: UserTemplatesActions.TriggerUnsplashImageDownload,
  payload: {
    downloadLink,
  },
})

export const triggerUnsplashImageDownloadSuccess = (): TriggerUnsplashImageDownloadSuccessAction => ({
  type: UserTemplatesActions.TriggerUnsplashImageDownloadSuccess,
})

export const triggerUnsplashImageDownloadFailure = (
  error: string,
): TriggerUnsplashImageDownloadFailureAction => ({
  type: UserTemplatesActions.TriggerUnsplashImageDownloadFailure,
  payload: {
    error,
  },
})
