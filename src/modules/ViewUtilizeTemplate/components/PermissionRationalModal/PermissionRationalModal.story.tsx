import React from 'react'
import { PermissionRationalModal, Props } from './PermissionRationalModal'

export default {
  title: 'Components/ViewUtilizeTemplate/PermissionRationalModal',
  component: PermissionRationalModal,
}

export const defaultState = (): React.FunctionComponentElement<Props> => (
  <PermissionRationalModal
    handleScopeRequestClicked={(): void => undefined}
    handleAuthModalClose={(): void => undefined}
  />
)

defaultState.story = {
  name: 'default',
}
