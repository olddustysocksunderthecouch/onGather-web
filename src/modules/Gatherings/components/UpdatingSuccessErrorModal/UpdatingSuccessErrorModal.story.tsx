import React from 'react'
import { UpdateGatheringStatus } from '../../types'
import { Props, UpdatingSuccessErrorModal } from './UpdatingSuccessErrorModal'

export default {
  title: 'Components/Gatherings/UpdatingSuccessErrorModal',
  component: UpdatingSuccessErrorModal,
}

export const errorState = (): React.FunctionComponentElement<Props> => (
  <UpdatingSuccessErrorModal
    updateGatheringStatus={UpdateGatheringStatus.Error}
    handleCloseModalClicked={(): void => undefined}
  />
)

errorState.story = {
  name: 'error',
}

export const updatingState = (): React.FunctionComponentElement<Props> => (
  <UpdatingSuccessErrorModal
    updateGatheringStatus={UpdateGatheringStatus.Updating}
    handleCloseModalClicked={(): void => undefined}
  />
)

updatingState.story = {
  name: 'updating',
}

export const successState = (): React.FunctionComponentElement<Props> => (
  <UpdatingSuccessErrorModal
    updateGatheringStatus={UpdateGatheringStatus.Success}
    handleCloseModalClicked={(): void => undefined}
  />
)

successState.story = {
  name: 'success',
}
