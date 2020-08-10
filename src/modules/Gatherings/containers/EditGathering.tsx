import React, { Dispatch, useEffect } from 'react'
import { connect } from 'react-redux'
import { useFirestore } from 'react-redux-firebase'
import { useParams } from 'react-router-dom'
import { AnyAction } from 'redux'
import { selectors as firebaseSelectors } from '../../../common/modules/firebase'
import TopNavLayout from '../../../common/modules/TopNav/containers/TopNavLayout'
import { ConnectedReduxProps, RootState } from '../../../common/redux/types'
import { Gathering, GatheringDraft, Template } from '../../../common/types'
import { selectors as authSelectors } from '../../Auth'
import { fetchScopes, signInGoogle } from '../../Auth/Auth.actions'
import { CalendarEventScopeStatus } from '../../Auth/types'
import { EditGathering } from '../components/EditGathering'
import { updateGathering } from '../Gatherings.actions'
import { firebaseSelectors as gatheringsFirebaseSelectors } from '../index'
import { selectors as gatheringsSelectors } from '../index'
import { UpdateGatheringStatus } from '../types'

interface Props extends ConnectedReduxProps<AnyAction> {
  calendarEventScopeIsEnabled: boolean
  template: Template
  gathering: Gathering
  calendarEventScopeStatus: CalendarEventScopeStatus
  updateGatheringStatus: UpdateGatheringStatus
  isAuthenticated: boolean
  scopeIsGranted: boolean
  handleUseTemplateClicked: () => void
  handleFetchScopes: () => void
  handleContinueWithGoogleClicked: () => void
  handleScopeRequest: (gatheringDraft: GatheringDraft) => void
  handleUpdateGathering: (gathering: Gathering) => void
}

const EditGatheringContainer = ({
  gathering,
  isAuthenticated,
  scopeIsGranted,
  calendarEventScopeStatus,
  updateGatheringStatus,
  handleFetchScopes,
  handleContinueWithGoogleClicked,
  handleUpdateGathering,
}: Props): React.FunctionComponentElement<Props> => {
  const { id } = useParams()
  const firestore = useFirestore()
  useEffect(() => {
    console.log('enter 1st useEffect', calendarEventScopeStatus)
    console.log('isAuthenticated', isAuthenticated)
    if (
      isAuthenticated &&
      (calendarEventScopeStatus ===
        CalendarEventScopeStatus.FetchedNotGranted ||
        calendarEventScopeStatus === CalendarEventScopeStatus.NotFetched ||
        calendarEventScopeStatus === CalendarEventScopeStatus.Error)
    ) {
      console.log('enter 1st conditional', calendarEventScopeStatus)
      handleFetchScopes()
    }
    // eslint-disable-next-line
  }, [isAuthenticated])

  useEffect(() => {
    console.log('enter 2nd useEffect', calendarEventScopeStatus)
    if (
      isAuthenticated &&
      (calendarEventScopeStatus === CalendarEventScopeStatus.Error ||
        calendarEventScopeStatus === CalendarEventScopeStatus.NotFetched ||
        calendarEventScopeStatus === CalendarEventScopeStatus.FetchedNotGranted)
    ) {
      console.log('enter 2nd conditional', calendarEventScopeStatus)
      handleFetchScopes()
    }
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    firestore.get({
      collection: 'gatherings',
      where: [['gatheringId', '==', id]],
      storeAs: 'selectedGathering',
    })
    // eslint-disable-next-line
  }, [id])

  return (
    <TopNavLayout activeNavPath="/edit-send-invites">
      <EditGathering
        isAuthenticated={isAuthenticated}
        gathering={gathering}
        scopeIsGranted={scopeIsGranted}
        updateGatheringStatus={updateGatheringStatus}
        handleContinueWithGoogleClicked={handleContinueWithGoogleClicked}
        handleUpdateGathering={handleUpdateGathering}
      />
    </TopNavLayout>
  )
}
const mapStateToProps = (state: RootState): any => ({
  isAuthenticated: firebaseSelectors.selectIsAuthenticated(state),
  gathering: gatheringsFirebaseSelectors.selectSelectedGathering(state),
  updateGatheringStatus: gatheringsSelectors.selectUpdateGatheringStatus(state),
  calendarEventScopeStatus: authSelectors.selectCalendarEventScopeStatus(state),
  scopeIsGranted: authSelectors.selectCalendarEventScopeIsGranted(state),
})

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>): any => ({
  handleUpdateGathering: (gathering: Gathering): void =>
    dispatch(updateGathering(gathering)),
  handleFetchScopes: (): void => dispatch(fetchScopes()),
  handleContinueWithGoogleClicked: (): void => dispatch(signInGoogle()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditGatheringContainer)
