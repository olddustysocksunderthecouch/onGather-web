import React from 'react'
import { Props, UserTemplates } from './UserTemplates'

export default {
  title: 'Views/UserTemplates',
  component: UserTemplates,
}

export const defaultState = (): React.FunctionComponentElement<Props> => (
  <UserTemplates
    draftTemplates={[]}
    publishedTemplates={[]}
    handleCreateNewTemplateClicked={(): void => undefined}
    handleTemplateClicked={(): void => undefined}
  />
)

defaultState.story = {
  name: 'default',
}
