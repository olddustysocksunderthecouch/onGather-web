import React from 'react'
import { create } from 'react-test-renderer'
import { Home } from './Home'

describe('Home Component', () => {
  it('renders correctly', () => {
    // when we create the component then it should render correctly
    const instance = create(<Home dummyText={'This is the Home Component'} />)
    expect(instance.root.type).toBe(Home)
  })
})
