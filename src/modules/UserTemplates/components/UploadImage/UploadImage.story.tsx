import React from 'react'
import { UploadImage } from './UploadImage'

export default {
  title: 'Components/UserTemplates/UploadImage',
  component: UploadImage,
}

export const defaultState = (): React.ReactElement => (
  <UploadImage handleImageSelected={(): void => undefined} />
)

defaultState.story = {
  name: 'default',
}
