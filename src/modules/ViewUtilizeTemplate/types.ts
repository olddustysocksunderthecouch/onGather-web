import { Gathering } from '../../common/types'

export enum CreateGatheringStatus {
  None = 'None',
  Creating = 'Creating',
  Success = 'Success',
  Error = 'Error',
}

export interface ViewUseTemplateState {
  createGatheringStatus: CreateGatheringStatus
  error: string
}

export enum ViewUseTemplateActions {
  CreateGathering = '/UserTemplates/CREATE_GATHERING',
  CreateGatheringSuccess = '/UserTemplates/CREATE_GATHERING_SUCCESS',
  CreateGatheringFailure = '/UserTemplates/CREATE_GATHERING_FAILURE',
}

export interface CreateGatheringAction {
  type: typeof ViewUseTemplateActions.CreateGathering
  payload: { gathering: Gathering }
}

export interface CreateGatheringSuccessAction {
  type: typeof ViewUseTemplateActions.CreateGatheringSuccess
}

export interface CreateGatheringFailureAction {
  type: typeof ViewUseTemplateActions.CreateGatheringFailure
  payload: { message: string }
}

export type ViewUseTemplateActionTypes =
  | CreateGatheringAction
  | CreateGatheringSuccessAction
  | CreateGatheringFailureAction
