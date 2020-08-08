import React from 'react'
import { Props, GatheringPreview } from './GatheringPreview'
import { gatheringMock } from '../../../../common/mockData'

export default {
  title: 'Components/GatheringPreview/GatheringPreview',
  component: GatheringPreview,
}

export const defaultState = (): React.FunctionComponentElement<Props> => (
  <GatheringPreview
    gathering={gatheringMock}
    handleGatheringPreviewClicked={(): void => undefined}
  />
)

defaultState.story = {
  name: 'default',
}
