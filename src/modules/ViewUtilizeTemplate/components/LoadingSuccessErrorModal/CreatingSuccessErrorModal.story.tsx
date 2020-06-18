import React from 'react'
import { CreateGatheringStatus } from '../../types'
import { CreatingSuccessErrorModal, Props } from './CreatingSuccessErrorModal'

export default {
  title: 'Components/ViewUtilizeTemplate/LoadingSuccessErrorModal',
  component: CreatingSuccessErrorModal,
}

export const errorState = (): React.FunctionComponentElement<Props> => (
  <CreatingSuccessErrorModal
    createGatheringStatus={CreateGatheringStatus.Error}
    handleCloseModalClicked={(): void => undefined}
  />
)

errorState.story = {
  name: 'error',
}

export const creatingState = (): React.FunctionComponentElement<Props> => (
  <CreatingSuccessErrorModal
    createGatheringStatus={CreateGatheringStatus.Creating}
    handleCloseModalClicked={(): void => undefined}
  />
)

creatingState.story = {
  name: 'creating',
}

export const successState = (): React.FunctionComponentElement<Props> => (
  <CreatingSuccessErrorModal
    createGatheringStatus={CreateGatheringStatus.Success}
    handleCloseModalClicked={(): void => undefined}
  />
)

successState.story = {
  name: 'success',
}
