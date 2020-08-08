import React from 'react'
import { gatheringMock } from '../../../../common/mockData'
import { Props, SummaryDetails } from './SummaryDetails'

export default {
  title: 'Components/Gatherings/SummaryDetails',
  component: SummaryDetails,
}
export const defaultState = (): React.FunctionComponentElement<Props> => (
  <SummaryDetails gathering={gatheringMock} />
)

defaultState.story = {
  name: 'default',
}
