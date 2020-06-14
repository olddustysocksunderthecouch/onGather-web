import React from 'react'
import { create } from 'react-test-renderer'
import { AddMainAimsOutcomes } from './AddMainAimsOutcomes'

describe('AddMainAimsOutcomes Component', () => {
  it('renders correctly', () => {
    // when we create the component then it should render correctly
    const instance = create(
      <AddMainAimsOutcomes onChange={(): void => undefined} value={[]} />,
    )
    expect(instance.root.type).toBe(AddMainAimsOutcomes)
  })
})
