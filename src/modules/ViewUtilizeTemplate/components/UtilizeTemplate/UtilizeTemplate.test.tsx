import React from 'react'
import { create } from 'react-test-renderer'
import { UtilizeTemplate } from './UtilizeTemplate'

describe('UtilizeTemplate Component', () => {
  it('renders correctly', () => {
    // when we create the component then it should render correctly
    const instance = create(
      <UtilizeTemplate dummyText={'This is the UtilizeTemplate Component'} />,
    )
    expect(instance.root.type).toBe(UtilizeTemplate)
  })
})
