import { TemplateCreation, TemplateFirestoreResult } from '../../common/types'

export enum Category {
  Games = 'Games',
  BookClub = 'Book Club',
  Meditation = 'Meditation',
  Craft = 'Craft',
  Workout = 'Workout',
  Discussion = 'Discussion',
}

export interface TemplateEditorState extends TemplateCreation {
  error: string
  loading: string
}

export interface UserTemplatesState {
  selectedTemplateId: string
  templateEditor: TemplateEditorState
}

export enum UserTemplatesActions {
  CreateNewTemplate = '/UserTemplates/CREATE_NEW_TEMPLATE',
  CreateNewTemplateSuccess = '/UserTemplates/CREATE_NEW_TEMPLATE_SUCCESS',
  CreateNewTemplateFailure = '/UserTemplates/CREATE_NEW_TEMPLATE_FAILURE',
  EditExistingTemplate = '/UserTemplates/EDIT_EXISTING_TEMPLATE',
  SetExistingTemplateEditorData = '/UserTemplates/SET_EXISTING_TEMPLATE_EDITOR_DATA',
  SetEditorTemplateData = '/UserTemplates/SET_EDITOR_TEMPLATE_DATA',
  SaveDraftTemplate = '/UserTemplates/SAVE_DRAFT_TEMPLATE',
  SaveDraftTemplateSuccess = '/UserTemplates/SAVE_DRAFT_TEMPLATE_SUCCESS',
  SaveDraftTemplateFailure = '/UserTemplates/SAVE_DRAFT_TEMPLATE_FAILURE',
  PublishTemplate = '/UserTemplates/PUBLISH_TEMPLATE',
  PublishTemplateSuccess = '/UserTemplates/PUBLISH_TEMPLATE_SUCCESS',
  PublishTemplateFailure = '/UserTemplates/PUBLISH_TEMPLATE_FAILURE',
  UploadImage = '/UserTemplates/UPLOAD_IMAGE',
  UploadImageSuccess = '/UserTemplates/UPLOAD_IMAGE_SUCCESS',
  UploadImageFailure = '/UserTemplates/UPLOAD_IMAGE_FAILURE',
}

export interface CreateNewTemplateAction {
  type: typeof UserTemplatesActions.CreateNewTemplate
}

export interface CreateNewTemplateSuccessAction {
  type: typeof UserTemplatesActions.CreateNewTemplateSuccess
  payload: {
    templateId: string
  }
}

export interface CreateNewTemplateFailureAction {
  type: typeof UserTemplatesActions.CreateNewTemplateFailure
  payload: {
    message: string
  }
}

export interface EditExistingTemplateAction {
  type: typeof UserTemplatesActions.EditExistingTemplate
  payload: {
    templateId: string
  }
}

export interface SetExistingTemplateEditorDataAction {
  type: typeof UserTemplatesActions.SetExistingTemplateEditorData
  payload: {
    templateId: string
    templateData: TemplateFirestoreResult
  }
}

export interface SetEditorTemplateDataAction {
  type: typeof UserTemplatesActions.SetEditorTemplateData
  payload: {
    template: TemplateCreation
  }
}

export interface SaveDraftTemplateAction {
  type: typeof UserTemplatesActions.SaveDraftTemplate
}

export interface SaveDraftTemplateSuccessAction {
  type: typeof UserTemplatesActions.SaveDraftTemplateSuccess
}

export interface SaveDraftTemplateSuccessAction {
  type: typeof UserTemplatesActions.SaveDraftTemplateSuccess
}

export interface SaveDraftTemplateFailureAction {
  type: typeof UserTemplatesActions.SaveDraftTemplateFailure
  payload: {
    message: string
  }
}

export interface PublishTemplateAction {
  type: typeof UserTemplatesActions.PublishTemplate
}

export interface PublishTemplateSuccessAction {
  type: typeof UserTemplatesActions.PublishTemplateSuccess
}

export interface PublishTemplateFailureAction {
  type: typeof UserTemplatesActions.PublishTemplateFailure
  payload: {
    message: string
  }
}

export interface UploadImageAction {
  type: typeof UserTemplatesActions.UploadImage
  payload: {
    file: File
  }
}

export interface UploadImageSuccessAction {
  type: typeof UserTemplatesActions.UploadImageSuccess
  payload: {
    result: any
  }
}

export interface UploadImageFailureAction {
  type: typeof UserTemplatesActions.UploadImageFailure
  payload: {
    message: string
  }
}

export type UserTemplatesActionTypes =
  | CreateNewTemplateAction
  | CreateNewTemplateSuccessAction
  | CreateNewTemplateFailureAction
  | EditExistingTemplateAction
  | SetExistingTemplateEditorDataAction
  | SetEditorTemplateDataAction
  | SaveDraftTemplateAction
  | SaveDraftTemplateSuccessAction
  | SaveDraftTemplateFailureAction
  | PublishTemplateAction
  | PublishTemplateSuccessAction
  | PublishTemplateFailureAction
  | UploadImageAction
  | UploadImageSuccessAction
  | UploadImageFailureAction
