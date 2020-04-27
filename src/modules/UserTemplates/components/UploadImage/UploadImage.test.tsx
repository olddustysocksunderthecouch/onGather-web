import React from 'react'
import { create } from 'react-test-renderer'
import { UploadImage } from './UploadImage'

describe('UploadImage Component', () => {
  it('renders correctly', () => {
    // when we create the component then it should render correctly
    const instance = create(<UploadImage />)
    expect(instance.root.type).toBe(UploadImage)
  })
})
