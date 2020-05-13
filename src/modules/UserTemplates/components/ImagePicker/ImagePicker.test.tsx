import React from 'react'
import { create } from 'react-test-renderer'
import { ImagePicker } from './ImagePicker'

describe('ImagePicker Component', () => {
  it('renders correctly', () => {
    // when we create the component then it should render correctly
    const instance = create(
      <ImagePicker handleContinueWithClicked={(): void => undefined} />,
    )
    expect(instance.root.type).toBe(ImagePicker)
  })
})
