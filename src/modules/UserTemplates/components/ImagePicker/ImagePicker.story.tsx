import { State, Store } from '@sambego/storybook-state'
import React from 'react'
// import mock from '../../__mocks__/mock-image-search-response.json'
import { ImagePicker, Props } from './ImagePicker'

export default {
  title: 'Components/UserTemplates/ImagePicker',
  component: ImagePicker,
}

const store = new Store({
  selectedImage: '',
})

const handleSelectedImage = (imageUrl: string): void => {
  console.log(`${imageUrl} was clicked`)
  store.set({ selectedImage: imageUrl })
}

export const defaultState = (): React.FunctionComponentElement<Props> => (
  <State store={store}>
    <ImagePicker
      areNextImagesLoading={true}
      imageSearchResults={{} as any}
      handleFetchImages={(): void => undefined}
      handleSelectedImage={(): void => undefined}
      selectedImage={store.get('selectedImage')}
    />
  </State>
)

defaultState.story = {
  name: 'default',
}
