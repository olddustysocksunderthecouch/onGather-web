export interface Template {
  status: 'draft' | 'publish'
  templateId?: string
  category?: string
  title?: string
  shortDescription?: string
  mainAimsOutcomes?: string
  suggestedDuration?: number
  imageUrl?: string
  hostInstructions?: string
  invitationInstructions?: string
}

export interface Duration {
  timeMinutes: string
  timeFormatted: string
}

export enum CreateTemplateActions {
  SaveDraftTemplate = '/CreateTemplate/SAVE_DRAFT_TEMPLATE',
  SaveDraftTemplateSuccess = '/CreateTemplate/SAVE_DRAFT_TEMPLATE_SUCCESS',
  PublishTemplate = '/CreateTemplate/SAVE_DRAFT_TEMPLATE',
}

export interface SaveDraftTemplateAction {
  type: typeof CreateTemplateActions.SaveDraftTemplate
}

export interface SaveDraftTemplateSuccessAction {
  type: typeof CreateTemplateActions.SaveDraftTemplateSuccess
}

export interface PublishTemplateAction {
  type: typeof CreateTemplateActions.PublishTemplate
}

export type CreateTemplateActionTypes =
  | SaveDraftTemplateAction
  | SaveDraftTemplateSuccessAction
  | PublishTemplateAction
