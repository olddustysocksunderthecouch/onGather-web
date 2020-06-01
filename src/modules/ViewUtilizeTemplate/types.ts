export enum ViewUseTemplateActions {
  UtilizeTemplate = '/UserTemplates/UTILIZE_TEMPLATE',
  UtilizeTemplateSuccess = '/UserTemplates/UTILIZE_TEMPLATE_SUCCESS',
  UtilizeTemplateFailure = '/UserTemplates/UTILIZE_TEMPLATE_FAILURE',
}

export interface UtilizeTemplateAction {
  type: typeof ViewUseTemplateActions.UtilizeTemplate
}

export interface UtilizeTemplateSuccessAction {
  type: typeof ViewUseTemplateActions.UtilizeTemplateSuccess
  payload: {
    templateId: string
  }
}

export interface UtilizeTemplateFailureAction {
  type: typeof ViewUseTemplateActions.UtilizeTemplateFailure
  payload: {
    message: string
  }
}

export type ViewUseTemplateActionTypes =
  | UtilizeTemplateAction
  | UtilizeTemplateSuccessAction
  | UtilizeTemplateFailureAction
