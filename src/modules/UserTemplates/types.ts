import { TemplateCreation } from '../../common/types'

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
  templateEditor: TemplateEditorState
}

export interface Duration {
  timeMinutes: string
  timeFormatted: string
}

export enum UserTemplatesActions {
  SetEditorTemplateData = '/UserTemplates/SET_EDITOR_TEMPLATE_DATA',
  SaveDraftTemplate = '/UserTemplates/SAVE_DRAFT_TEMPLATE',
  SaveDraftTemplateSuccess = '/UserTemplates/SAVE_DRAFT_TEMPLATE_SUCCESS',
  SaveDraftTemplateFailure = '/UserTemplates/SAVE_DRAFT_TEMPLATE_FAILURE',
  PublishTemplate = '/UserTemplates/PUBLISH_TEMPLATE',
  PublishTemplateSuccess = '/UserTemplates/PUBLISH_TEMPLATE_SUCCESS',
  PublishTemplateFailure = '/UserTemplates/PUBLISH_TEMPLATE_FAILURE',
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

export type UserTemplatesActionTypes =
  | SetEditorTemplateDataAction
  | SaveDraftTemplateAction
  | SaveDraftTemplateSuccessAction
  | SaveDraftTemplateFailureAction
  | PublishTemplateAction
  | PublishTemplateSuccessAction
  | PublishTemplateFailureAction
