import React, { Dispatch, useEffect } from 'react'
import { connect } from 'react-redux'
import { useFirestore } from 'react-redux-firebase'
import { useLocation, useParams } from 'react-router-dom'
import { AnyAction } from 'redux'
import { selectors as firebaseSelectors } from '../../../common/modules/firebase'
import TopNavLayout from '../../../common/modules/TopNav/containers/TopNavLayout'
import { ConnectedReduxProps, RootState } from '../../../common/redux/types'
import { Gathering, GatheringDraft, Template } from '../../../common/types'
import { selectors as authSelectors } from '../../Auth'
import {
  fetchScopes,
  requestScope,
  signInGoogle,
} from '../../Auth/Auth.actions'
import { CalendarEventScopeStatus } from '../../Auth/types'
import { UtilizeTemplate } from '../components/UtilizeTemplate'
import { firebaseSelectors as firebaseViewUseTemplateSelectors } from '../index'
import { createGathering } from '../ViewUseTemplate.actions'

interface Props extends ConnectedReduxProps<AnyAction> {
  calendarEventScopeIsEnabled: boolean
  template: Template
  gatheringDraft: GatheringDraft
  calendarEventScopeStatus: CalendarEventScopeStatus
  isAuthenticated: boolean
  scopeIsGranted: boolean
  handleUseTemplateClicked: () => void
  handleFetchScopes: () => void
  handleContinueWithGoogleClicked: () => void
  handleScopeRequest: (gatheringDraft: GatheringDraft) => void
  handleSendGatheringInvite: (gathering: Gathering) => void
}

const useQuery = (): URLSearchParams => {
  return new URLSearchParams(useLocation().search)
}

const UtilizeTemplateContainer = ({
  template,
  gatheringDraft,
  isAuthenticated,
  scopeIsGranted,
  calendarEventScopeStatus,
  handleFetchScopes,
  handleScopeRequest,
  handleContinueWithGoogleClicked,
  handleSendGatheringInvite,
}: Props): React.FunctionComponentElement<Props> => {
  const { id } = useParams()
  const fromState = useQuery().get('fromState') === 'true'
  const firestore = useFirestore()

  useEffect(() => {
    if (
      isAuthenticated &&
      !fromState &&
      calendarEventScopeStatus !== CalendarEventScopeStatus.FetchedIsGranted
    ) {
      handleFetchScopes()
    }
  }, [isAuthenticated, calendarEventScopeStatus, fromState, handleFetchScopes])

  useEffect(() => {
    firestore.get({
      collection: 'templates',
      where: [['templateId', '==', id]],
      storeAs: 'selectedTemplate',
    })
    // eslint-disable-next-line
  }, [id])

  return (
    <TopNavLayout topNavButton={{ text: 'Browse', path: '/browse-templates' }}>
      <UtilizeTemplate
        isAuthenticated={isAuthenticated}
        template={template}
        fromState={fromState}
        gatheringDraft={gatheringDraft}
        scopeIsGranted={scopeIsGranted}
        handleContinueWithGoogleClicked={handleContinueWithGoogleClicked}
        handleScopeRequest={handleScopeRequest}
        handleSendGatheringInvite={handleSendGatheringInvite}
      />
    </TopNavLayout>
  )
}
const mapStateToProps = (state: RootState): any => ({
  isAuthenticated: firebaseSelectors.selectIsAuthenticated(state),
  template: firebaseViewUseTemplateSelectors.selectSelectedTemplate(state),
  gatheringDraft: authSelectors.selectGatheringDraft(state),
  calendarEventScopeStatus: authSelectors.selectCalendarEventScopeStatus(state),
  scopeIsGranted: authSelectors.selectCalendarEventScopeIsGranted(state),
})

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>): any => ({
  handleScopeRequest: (gathering: Gathering): void =>
    dispatch(requestScope(gathering)),
  handleSendGatheringInvite: (gathering: Gathering): void =>
    dispatch(createGathering(gathering)),
  handleFetchScopes: (): void => dispatch(fetchScopes()),
  handleContinueWithGoogleClicked: (): void => dispatch(signInGoogle()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UtilizeTemplateContainer)
