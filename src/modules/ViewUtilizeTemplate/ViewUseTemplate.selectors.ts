import { createSelector } from 'reselect'
import { RootState } from '../../common/redux/types'
import { ViewUseTemplateState, CreateGatheringStatus } from './types'

export const selectViewUseTemplate = (state: RootState): ViewUseTemplateState =>
  state.viewUseTemplate

export const selectCreateGatheringStatus = createSelector(
  selectViewUseTemplate,
  (viewUseTemplate: ViewUseTemplateState): CreateGatheringStatus =>
    viewUseTemplate.createGatheringStatus,
)
