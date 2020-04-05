import React from 'react'
import { create } from 'react-test-renderer'
import { PrivacyPolicy } from './PrivacyPolicy'

describe('PrivacyPolicy Component', () => {
  it('renders correctly', () => {
    // when we create the component then it should render correctly
    const instance = create(<PrivacyPolicy />)
    expect(instance.root.type).toBe(PrivacyPolicy)
  })
})
