import { Gathering } from '../../common/types'

export enum UpdateGatheringStatus {
  None = 'None',
  Updating = 'Updating',
  Success = 'Success',
  Error = 'Error',
}

export interface GatheringsState {
  updateGatheringStatus: UpdateGatheringStatus
  error: string
}

export enum GatheringsActions {
  UpdateGathering = '/Gatherings/UPDATE_GATHERING',
  UpdateGatheringSuccess = '/Gatherings/UPDATE_GATHERING_SUCCESS',
  UpdateGatheringFailure = '/Gatherings/UPDATE_GATHERING_FAILURE',
}

export interface UpdateGatheringAction {
  type: typeof GatheringsActions.UpdateGathering
  payload: { gathering: Gathering }
}

export interface UpdateGatheringSuccessAction {
  type: typeof GatheringsActions.UpdateGatheringSuccess
}

export interface UpdateGatheringFailureAction {
  type: typeof GatheringsActions.UpdateGatheringFailure
  payload: { message: string }
}

export type ViewUseTemplateActionTypes =
  | UpdateGatheringAction
  | UpdateGatheringSuccessAction
  | UpdateGatheringFailureAction
