import React from 'react'
import { CreateTemplate, Props } from './CreateTemplate'

export default {
  title: 'Views/CreateTemplate',
  component: CreateTemplate,
}

export const defaultState = (): React.FunctionComponentElement<Props> => (
  <CreateTemplate
    loading="Here is an error"
    error="error"
    handleTemplateDataChange={(): void => undefined}
    handleImageSelected={(): void => undefined}
  />
)

defaultState.story = {
  name: 'default',
}
