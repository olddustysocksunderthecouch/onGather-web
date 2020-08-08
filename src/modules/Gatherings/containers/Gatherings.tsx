import React, { Dispatch, useEffect } from 'react'
import { connect } from 'react-redux'
import { useFirestore } from 'react-redux-firebase'
import { AnyAction } from 'redux'
import { selectors as firebaseSelectors } from '../../../common/modules/firebase'
import TopNavLayout from '../../../common/modules/TopNav/containers/TopNavLayout'
import { ConnectedReduxProps, RootState } from '../../../common/redux/types'
import { Gathering } from '../../../common/types'
import { Gatherings } from '../components/Gatherings'
import { firebaseSelectors as gatheringsFirebaseSelectors } from '../index'

interface Props extends ConnectedReduxProps<AnyAction> {
  email: string | null
  upcomingGatheringsOrganizer: Gathering[]
  upcomingGatheringsInvitee: Gathering[]
  allPastGatherings: Gathering[]
  handleTemplateClicked: (templateId: string, type: string) => void
  handleCreateNewTemplateClicked: () => void
}

const GatheringsContainer = ({
  email,
  upcomingGatheringsOrganizer,
  upcomingGatheringsInvitee,
  allPastGatherings,
  handleTemplateClicked,
  handleCreateNewTemplateClicked,
}: Props): React.FunctionComponentElement<Props> => {
  const firestore = useFirestore()
  useEffect(() => {
    if (email) {
      firestore.setListeners([
        {
          collection: 'gatherings',
          orderBy: [['startTimestamp', 'asc']],
          where: [
            ['organizerEmail', '==', email],
            ['startTimestamp', '>', new Date().getTime() - 3600000], // minus 1 hour
          ],
          storeAs: 'upcomingGatheringsOrganizer',
        },
        {
          collection: 'gatherings',
          orderBy: [['startTimestamp', 'asc']],
          where: [
            ['inviteeEmails', 'array-contains', email],
            ['startTimestamp', '>', new Date().getTime() - 3600000], // minus 1 hour
          ],
          storeAs: 'upcomingGatheringsInvitee',
        },
        {
          collection: 'gatherings',
          orderBy: [['startTimestamp', 'asc']],
          where: [
            ['organizerEmail', '==', email],
            ['startTimestamp', '<', new Date().getTime() - 3600000], // minus 1 hour
          ],
          storeAs: 'pastGatheringsOrganizer',
        },
        {
          collection: 'gatherings',
          orderBy: [['startTimestamp', 'asc']],
          where: [
            ['inviteeEmails', 'array-contains', email],
            ['startTimestamp', '<', new Date().getTime() - 3600000], // minus 1 hour
          ],
          storeAs: 'pastGatheringsInvitee',
        },
      ])
    }
    // eslint-disable-next-line
  }, [email])

  return (
    <TopNavLayout activeNavPath="/gatherings" authIsRequired={true}>
      <Gatherings
        upcomingGatheringsOrganizer={upcomingGatheringsOrganizer}
        upcomingGatheringsInvitee={upcomingGatheringsInvitee}
        allPastGatherings={allPastGatherings}
        handleTemplateClicked={handleTemplateClicked}
        handleCreateNewTemplateClicked={handleCreateNewTemplateClicked}
      />
    </TopNavLayout>
  )
}
const mapStateToProps = (state: RootState): any => ({
  email: firebaseSelectors.selectEmail(state),
  upcomingGatheringsOrganizer: gatheringsFirebaseSelectors.selectUpcomingGatheringsOrganizer(
    state,
  ),
  upcomingGatheringsInvitee: gatheringsFirebaseSelectors.selectUpcomingGatheringsInvitee(
    state,
  ),
  allPastGatherings: gatheringsFirebaseSelectors.selectAllPastGatherings(state),
  // publishedTemplates: userTemplatesSelectors.selectUserTemplatePublished(state),
})

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>): any => ({
  // handleTemplateClicked: (templateId: string, type: string): void => {
  //   dispatch(editExistingTemplate(templateId, type))
  // },
  // handleCreateNewTemplateClicked: (): void => dispatch(createNewTemplate()),
})

export default connect(mapStateToProps, mapDispatchToProps)(GatheringsContainer)
