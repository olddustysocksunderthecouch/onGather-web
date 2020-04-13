import React from 'react'
import { create } from 'react-test-renderer'
import { UserTemplate } from './UserTemplate'

describe('UserTemplate Component', () => {
  it('renders correctly', () => {
    // when we create the component then it should render correctly
    const instance = create(
      <UserTemplate dummyText={'This is the UserTemplate Component'} />,
    )
    expect(instance.root.type).toBe(UserTemplate)
  })
})
