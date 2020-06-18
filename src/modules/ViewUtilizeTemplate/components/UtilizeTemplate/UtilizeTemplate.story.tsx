import React from 'react'
import { gatheringDraftMock, templateMock } from '../../../../common/mockData'
import { CreateGatheringStatus } from '../../types'
import { Props, UtilizeTemplate } from './UtilizeTemplate'

export default {
  title: 'Views/UtilizeTemplate',
  component: UtilizeTemplate,
}

export const defaultState = (): React.FunctionComponentElement<Props> => (
  <UtilizeTemplate
    createGatheringStatus={CreateGatheringStatus.Creating}
    isAuthenticated={false}
    scopeIsGranted={true}
    fromState={true}
    template={templateMock}
    gatheringDraft={gatheringDraftMock}
    handleScopeRequest={(): void => undefined}
    handleContinueWithGoogleClicked={(): void => undefined}
    handleSendGatheringInvite={(): void => undefined}
  />
)

defaultState.story = {
  name: 'default',
}
