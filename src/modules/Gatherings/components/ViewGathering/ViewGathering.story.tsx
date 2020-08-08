import React from 'react'
import { gatheringMock } from '../../../../common/mockData'
import { Props, ViewGathering } from './ViewGathering'

export default {
  title: 'Views/ViewGathering',
  component: ViewGathering,
}
export const defaultState = (): React.FunctionComponentElement<Props> => (
  <ViewGathering
    handleUseTemplateClicked={(): void => undefined}
    gathering={gatheringMock}
  />
)

defaultState.story = {
  name: 'default',
}
