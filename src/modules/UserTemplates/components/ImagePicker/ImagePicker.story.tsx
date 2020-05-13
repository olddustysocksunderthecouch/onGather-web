import React from 'react'
import { ImagePicker, Props } from './ImagePicker'

export default {
  title: 'Components/UserTemplates/ImagePicker',
  component: ImagePicker,
}

export const defaultState = (): React.FunctionComponentElement<Props> => (
  <ImagePicker
    handleContinueWithClicked={(): void => undefined}
    handleAuthModalClose={(): void => undefined}
  />
)

defaultState.story = {
  name: 'default',
}
