import React from 'react'
import { create } from 'react-test-renderer'
import { AddParticipants } from './AddParticipants'

describe('AddParticipants Component', () => {
  it('renders correctly', () => {
    // when we create the component then it should render correctly
    const instance = create(<AddParticipants />)
    expect(instance.root.type).toBe(AddParticipants)
  })
})
