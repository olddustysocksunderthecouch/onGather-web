import React from 'react'
import { templateMock } from '../../../../common/mockData'
import { Props, ViewTemplate } from './ViewTemplate'

export default {
  title: 'Views/ViewTemplate',
  component: ViewTemplate,
}
export const defaultState = (): React.FunctionComponentElement<Props> => (
  <ViewTemplate
    handleUseTemplateClicked={(): void => undefined}
    template={templateMock}
  />
)

defaultState.story = {
  name: 'default',
}
