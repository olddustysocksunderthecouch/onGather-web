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
