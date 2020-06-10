import React from 'react'
import { SendingConfirmationModal, Props } from './SendingConfirmationModal'

export default {
  title: 'Components/ViewUtilizeTemplate/SendingConfirmationModal',
  component: SendingConfirmationModal,
}

export const defaultState = (): React.FunctionComponentElement<Props> => (
  <SendingConfirmationModal
    handleContinueWithClicked={(): void => undefined}
    handleAuthModalClose={(): void => undefined}
  />
)

defaultState.story = {
  name: 'default',
}
