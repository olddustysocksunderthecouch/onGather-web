import React from 'react'
import { create } from 'react-test-renderer'
import { UserTemplates } from './UserTemplates'

describe('UserTemplate Component', () => {
  it('renders correctly', () => {
    // when we create the component then it should render correctly
    const instance = create(
      <UserTemplates dummyText={'This is the UserTemplates Component'} />,
    )
    expect(instance.root.type).toBe(UserTemplates)
  })
})
