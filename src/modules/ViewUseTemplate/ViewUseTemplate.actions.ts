import {
  UtilizeTemplateAction,
  UtilizeTemplateFailureAction,
  UtilizeTemplateSuccessAction,
  ViewUseTemplateActions,
} from './types'

export const utilizeTemplate = (): UtilizeTemplateAction => ({
  type: ViewUseTemplateActions.UtilizeTemplate,
})

export const utilizeTemplateSuccess = (
  templateId: string,
): UtilizeTemplateSuccessAction => ({
  type: ViewUseTemplateActions.UtilizeTemplateSuccess,
  payload: { templateId },
})

export const utilizeTemplateFailure = (
  message: string,
): UtilizeTemplateFailureAction => ({
  type: ViewUseTemplateActions.UtilizeTemplateFailure,
  payload: {
    message,
  },
})
