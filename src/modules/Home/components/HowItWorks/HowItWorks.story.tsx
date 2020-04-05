import React from 'react'
import { HowItWorks } from './HowItWorks'

export default {
  title: 'Components/Home/HowItWorks',
  component: HowItWorks,
}

export const defaultState = (): React.ReactElement => <HowItWorks />

defaultState.story = {
  name: 'default',
}
