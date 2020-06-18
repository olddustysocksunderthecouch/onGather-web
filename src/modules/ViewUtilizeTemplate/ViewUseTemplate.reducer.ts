import {
  CreateGatheringStatus,
  ViewUseTemplateActions,
  ViewUseTemplateActionTypes,
  ViewUseTemplateState,
} from './types'

export const initialState: ViewUseTemplateState = {
  createGatheringStatus: CreateGatheringStatus.None,
  error: '',
}

export function reducer(
  state = initialState,
  action: ViewUseTemplateActionTypes,
): ViewUseTemplateState {
  switch (action.type) {
    case ViewUseTemplateActions.CreateGathering: {
      return {
        ...state,
        createGatheringStatus: CreateGatheringStatus.Creating,
        error: '',
      }
    }
    case ViewUseTemplateActions.CreateGatheringSuccess: {
      return {
        ...state,
        createGatheringStatus: CreateGatheringStatus.Success,
        error: '',
      }
    }
    case ViewUseTemplateActions.CreateGatheringFailure: {
      return {
        ...state,
        createGatheringStatus: CreateGatheringStatus.Error,
        error: action.payload.message,
      }
    }
  }
  return state
}
