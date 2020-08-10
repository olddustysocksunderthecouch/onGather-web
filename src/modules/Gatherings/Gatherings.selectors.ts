import { createSelector } from 'reselect'
import { RootState } from '../../common/redux/types'
import { GatheringsState, UpdateGatheringStatus } from './types'

export const selectGatherings = (state: RootState): GatheringsState =>
  state.gatherings

export const selectUpdateGatheringStatus = createSelector(
  selectGatherings,
  (gatherings: GatheringsState): UpdateGatheringStatus =>
    gatherings.updateGatheringStatus,
)
