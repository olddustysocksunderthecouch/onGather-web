import { Gathering } from '../../common/types'
import {
  CreateGatheringAction,
  CreateGatheringFailureAction,
  CreateGatheringSuccessAction,
  UtilizeThisTemplateAction,
  ViewUseTemplateActions,
} from './types'

export const createGathering = (
  gathering: Gathering,
): CreateGatheringAction => ({
  type: ViewUseTemplateActions.CreateGathering,
  payload: { gathering },
})

export const createGatheringSuccess = (): CreateGatheringSuccessAction => ({
  type: ViewUseTemplateActions.CreateGatheringSuccess,
})

export const createGatheringFailure = (
  message: string,
): CreateGatheringFailureAction => ({
  type: ViewUseTemplateActions.CreateGatheringFailure,
  payload: {
    message,
  },
})

export const utilizeThisTemplate = (
  title: string,
  templateId: string,
): UtilizeThisTemplateAction => ({
  type: ViewUseTemplateActions.UtilizeThisTemplate,
  payload: {
    title,
    templateId,
  },
})
