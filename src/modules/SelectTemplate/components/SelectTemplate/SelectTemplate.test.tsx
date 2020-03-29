import React from 'react'
import { create } from 'react-test-renderer'
import { SelectTemplate } from './SelectTemplate'

describe('SelectTemplate Component', () => {
  it('renders correctly', () => {
    // when we create the component then it should render correctly
    const instance = create(
      <SelectTemplate dummyText={'This is the SelectTemplate Component'} />,
    )
    expect(instance.root.type).toBe(SelectTemplate)
  })
})
