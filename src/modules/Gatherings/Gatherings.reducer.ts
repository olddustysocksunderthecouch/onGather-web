import {
  GatheringsActions,
  GatheringsState,
  UpdateGatheringStatus,
  ViewUseTemplateActionTypes,
} from './types'

export const initialState: GatheringsState = {
  updateGatheringStatus: UpdateGatheringStatus.None,
  error: '',
}

export function reducer(
  state = initialState,
  action: ViewUseTemplateActionTypes,
): GatheringsState {
  switch (action.type) {
    case GatheringsActions.UpdateGathering: {
      return {
        ...state,
        updateGatheringStatus: UpdateGatheringStatus.Updating,
        error: '',
      }
    }
    case GatheringsActions.UpdateGatheringSuccess: {
      return {
        ...state,
        updateGatheringStatus: UpdateGatheringStatus.Success,
        error: '',
      }
    }
    case GatheringsActions.UpdateGatheringFailure: {
      return {
        ...state,
        updateGatheringStatus: UpdateGatheringStatus.Error,
        error: action.payload.message,
      }
    }
  }
  return state
}
