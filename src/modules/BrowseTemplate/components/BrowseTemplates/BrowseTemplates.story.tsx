import React from 'react'
import { BrowseTemplates, Props } from './BrowseTemplates'

export default {
  title: 'Views/BrowseTemplates',
  component: BrowseTemplates,
}

export const defaultState = (): React.FunctionComponentElement<Props> => (
  <BrowseTemplates templates={[]} />
)

defaultState.story = {
  name: 'default',
}
