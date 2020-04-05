import React from 'react'
import { PrivacyPolicy } from './PrivacyPolicy'

export default {
  title: 'Views/SelectTemplate',
  component: PrivacyPolicy,
}

export const defaultState = (): React.ReactElement => <PrivacyPolicy />

defaultState.story = {
  name: 'default',
}
