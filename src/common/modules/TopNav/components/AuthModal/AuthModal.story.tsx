import React from 'react'
import { AuthModal, Props } from './AuthModal'

export default {
  title: 'Components/TopNav/AuthModal',
  component: AuthModal,
}

export const defaultState = (): React.FunctionComponentElement<Props> => (
  <AuthModal
    handleContinueWithClicked={(): void => undefined}
    isAuthenticationLoading={true}
  />
)

defaultState.story = {
  name: 'default',
}
