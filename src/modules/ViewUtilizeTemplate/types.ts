import { Gathering } from '../../common/types'

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
  payload: { templateId: string }
}

export interface CreateGatheringFailureAction {
  type: typeof ViewUseTemplateActions.CreateGatheringFailure
  payload: { message: string }
}

export type ViewUseTemplateActionTypes =
  | CreateGatheringAction
  | CreateGatheringSuccessAction
  | CreateGatheringFailureAction
