import { Gathering } from '../../common/types'
import {
  UpdateGatheringAction,
  UpdateGatheringFailureAction,
  UpdateGatheringSuccessAction,
  GatheringsActions,
} from './types'

export const updateGathering = (
  gathering: Gathering,
): UpdateGatheringAction => ({
  type: GatheringsActions.UpdateGathering,
  payload: { gathering },
})

export const updateGatheringSuccess = (): UpdateGatheringSuccessAction => ({
  type: GatheringsActions.UpdateGatheringSuccess,
})

export const updateGatheringFailure = (
  message: string,
): UpdateGatheringFailureAction => ({
  type: GatheringsActions.UpdateGatheringFailure,
  payload: {
    message,
  },
})
