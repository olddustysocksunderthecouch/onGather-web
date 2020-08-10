import React from 'react'
import { gatheringMock } from '../../../../common/mockData'
import { UpdateGatheringStatus } from '../../types'
import { EditGathering, Props } from './EditGathering'

export default {
  title: 'Views/Gatherings/EditGathering',
  component: EditGathering,
}

export const defaultState = (): React.FunctionComponentElement<Props> => (
  <EditGathering
    updateGatheringStatus={UpdateGatheringStatus.Updating}
    isAuthenticated={false}
    scopeIsGranted={true}
    gathering={gatheringMock}
    handleContinueWithGoogleClicked={(): void => undefined}
    handleUpdateGathering={(): void => undefined}
  />
)

defaultState.story = {
  name: 'default',
}
