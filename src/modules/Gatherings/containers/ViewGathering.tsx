import React, { Dispatch, useEffect } from 'react'
import { connect } from 'react-redux'
import { useFirestore } from 'react-redux-firebase'
import { useParams } from 'react-router-dom'
import { AnyAction } from 'redux'
import TopNavLayout from '../../../common/modules/TopNav/containers/TopNavLayout'
import { ConnectedReduxProps, RootState } from '../../../common/redux/types'
import { Gathering } from '../../../common/types'
import { ViewGathering } from '../components/ViewGathering'
import { firebaseSelectors as gatheringsFirebaseSelectors } from '../index'

// import { utilizeThisTemplate } from '../ViewGathering.actions'

interface Props extends ConnectedReduxProps<AnyAction> {
  gathering: Gathering
  handleUseTemplateClicked: () => void
}

const ViewGatheringContainer = ({
  gathering,
  handleUseTemplateClicked,
}: Props): React.FunctionComponentElement<Props> => {
  const { id } = useParams()
  const firestore = useFirestore()

  useEffect(() => {
    firestore.get({
      collection: 'gatherings',
      doc: id,
      storeAs: 'selectedGathering',
    })
    // eslint-disable-next-line
  }, [id])

  return (
    <TopNavLayout activeNavPath="/activity">
      <ViewGathering
        gathering={gathering}
        handleUseTemplateClicked={handleUseTemplateClicked}
      />
    </TopNavLayout>
  )
}
const mapStateToProps = (state: RootState): any => ({
  gathering: gatheringsFirebaseSelectors.selectSelectedGathering(state),
})

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>): any => ({
  // handleUseTemplateClicked: (title: string, templateId: string): void =>
  //   dispatch(utilizeThisTemplate(title, templateId)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewGatheringContainer)
