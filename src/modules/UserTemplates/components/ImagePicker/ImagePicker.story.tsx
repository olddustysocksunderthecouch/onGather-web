import React from 'react'
import { ImagePicker, Props } from './ImagePicker'

export default {
  title: 'Components/UserTemplates/ImagePicker',
  component: ImagePicker,
}

export const defaultState = (): React.FunctionComponentElement<Props> => (
  <ImagePicker
    areNextImagesLoading={true}
    imageSearchResults={{} as any}
    handleFetchImages={(): void => undefined}
    handleSelectedImage={(): void => undefined}
    handleCloseImagePicker={(): void => undefined}
    searchTerm=""
    totalImagesAvailable={2}
  />
)

defaultState.story = {
  name: 'default',
}
