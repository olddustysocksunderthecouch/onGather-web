import React from 'react'
import { create } from 'react-test-renderer'
import { CreateNewTemplate } from './CreateNewTemplate'

describe('CreateNewTemplate Component', () => {
  it('renders correctly', () => {
    // when we create the component then it should render correctly
    const instance = create(<CreateNewTemplate />)
    expect(instance.root.type).toBe(CreateNewTemplate)
  })
})
