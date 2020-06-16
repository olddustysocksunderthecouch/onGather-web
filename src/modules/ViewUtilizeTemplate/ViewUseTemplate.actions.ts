import { Gathering } from '../../common/types'
import {
  CreateGatheringAction,
  CreateGatheringFailureAction,
  CreateGatheringSuccessAction,
  ViewUseTemplateActions,
} from './types'

export const createGathering = (
  gathering: Gathering,
): CreateGatheringAction => ({
  type: ViewUseTemplateActions.CreateGathering,
  payload: { gathering },
})

export const createGatheringSuccess = (
  templateId: string,
): CreateGatheringSuccessAction => ({
  type: ViewUseTemplateActions.CreateGatheringSuccess,
  payload: { templateId },
})

export const createGatheringFailure = (
  message: string,
): CreateGatheringFailureAction => ({
  type: ViewUseTemplateActions.CreateGatheringFailure,
  payload: {
    message,
  },
})
