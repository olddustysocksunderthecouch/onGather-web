export enum Category {
  Popular = 'Popular',
  BookClub = 'Book Club',
  Meditation = 'Meditation',
  Games = 'Games',
  Craft = 'Craft',
  Workout = 'Workout',
  Discussion = 'Discussion',
}

export interface Template {
  status?: 'draft' | 'publish'
  templateId?: string
  category?: string
  title?: string
  shortDescription?: string
  mainAimsOutcomes?: string
  suggestedDuration?: string
  imageUrl?: string
  hostInstructions?: string
  invitationDescription?: string
}

export interface CreateTemplateState {
  templateEditor: Template
}

export interface Duration {
  timeMinutes: string
  timeFormatted: string
}

export enum CreateTemplateActions {
  SetEditorTemplateData = '/CreateTemplate/SET_EDITOR_TEMPLATE_DATA',
  SaveDraftTemplate = '/CreateTemplate/SAVE_DRAFT_TEMPLATE',
  SaveDraftTemplateSuccess = '/CreateTemplate/SAVE_DRAFT_TEMPLATE_SUCCESS',
  SaveDraftTemplateFailure = '/CreateTemplate/SAVE_DRAFT_TEMPLATE_FAILURE',
  PublishTemplate = '/CreateTemplate/PUBLISH_TEMPLATE',
  PublishTemplateSuccess = '/CreateTemplate/PUBLISH_TEMPLATE_SUCCESS',
  PublishTemplateFailure = '/CreateTemplate/PUBLISH_TEMPLATE_FAILURE',
}

export interface SetEditorTemplateDataAction {
  type: typeof CreateTemplateActions.SetEditorTemplateData
  payload: {
    template: Template
  }
}

export interface SaveDraftTemplateAction {
  type: typeof CreateTemplateActions.SaveDraftTemplate
}

export interface SaveDraftTemplateSuccessAction {
  type: typeof CreateTemplateActions.SaveDraftTemplateSuccess
}

export interface SaveDraftTemplateSuccessAction {
  type: typeof CreateTemplateActions.SaveDraftTemplateSuccess
}

export interface SaveDraftTemplateFailureAction {
  type: typeof CreateTemplateActions.SaveDraftTemplateFailure
  payload: {
    message: string
  }
}

export interface PublishTemplateAction {
  type: typeof CreateTemplateActions.PublishTemplate
}

export interface PublishTemplateSuccessAction {
  type: typeof CreateTemplateActions.PublishTemplateSuccess
}

export interface PublishTemplateFailureAction {
  type: typeof CreateTemplateActions.PublishTemplateFailure
  payload: {
    message: string
  }
}

export type CreateTemplateActionTypes =
  | SetEditorTemplateDataAction
  | SaveDraftTemplateAction
  | SaveDraftTemplateSuccessAction
  | SaveDraftTemplateFailureAction
  | PublishTemplateAction
  | PublishTemplateSuccessAction
  | PublishTemplateFailureAction
