import React from 'react'
import { act, create } from 'react-test-renderer'
import mock from '../../__mocks__/mock-image-search-response.json'
import { ChooseImageList } from './ImagePicker'

describe('ChooseImageList Component', () => {
  it('renders correctly', () => {
    // when ... we create the component then it should render correctly
    const instance = create(
      <ChooseImageList
        areNextImagesLoading={true}
        imageUrls={mock.imageUrls}
        handleFetchImages={(): void => undefined}
        handleSelectedImage={(): void => undefined}
        selectedImage={'url'}
      />,
    )
    expect(instance.root.type).toBe(ChooseImageList)
  })

  it('renders an element for each item', () => {
    // when ... we create the component
    const instance = create(
      <ChooseImageList
        areNextImagesLoading={true}
        imageUrls={mock.imageUrls}
        handleFetchImages={(): void => undefined}
        handleSelectedImage={(): void => undefined}
        selectedImage={'url'}
      />,
    )
    const containerElement = instance.root.findAllByProps({
      id: 'imageGridItem',
    })
    // then ... there should be 6 out of 20 items should be rendered as this is how many are currently displayed
    expect(containerElement.length).toBe(6)
  })

  it('fires an handler when image is clicked', () => {
    // given ... we create the component with a handler
    const handleSelectedImage = jest.fn()
    const instance = create(
      <ChooseImageList
        areNextImagesLoading={true}
        imageUrls={mock.imageUrls}
        handleFetchImages={(): void => undefined}
        handleSelectedImage={handleSelectedImage}
        selectedImage={'url'}
      />,
    )
    const containerElement = instance.root.findAllByProps({
      id: 'imageGridItem',
    })
    // when ... we click on the image
    const firstImage = containerElement[0]

    act(() => {
      firstImage.props.onClick()
    })
    // then ... the handler is called once
    expect(handleSelectedImage).toBeCalledTimes(1)
  })
})
