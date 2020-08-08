import React from 'react'
import { Gatherings, Props } from './Gatherings'

export default {
  title: 'Views/Gatherings',
  component: Gatherings,
}

export const defaultState = (): React.FunctionComponentElement<Props> => (
  <Gatherings
    upcomingGatheringsOrganizer={[]}
    upcomingGatheringsInvitee={[]}
    allPastGatherings={[]}
    handleCreateNewTemplateClicked={(): void => undefined}
    handleTemplateClicked={(): void => undefined}
  />
)

defaultState.story = {
  name: 'default',
}
