import React, { Dispatch, useEffect } from 'react'
import { connect } from 'react-redux'
import { useFirestore } from 'react-redux-firebase'
import { useParams } from 'react-router-dom'
import { AnyAction } from 'redux'
import TopNavLayout from '../../../common/modules/TopNav/containers/TopNavLayout'
import { ConnectedReduxProps, RootState } from '../../../common/redux/types'
import { TemplateFirestoreResult } from '../../../common/types'
import { ViewTemplate } from '../components/ViewTemplate'
import { firebaseSelectors as firebaseViewUseTemplateSelectors } from '../index'

interface Props extends ConnectedReduxProps<AnyAction> {
  template: TemplateFirestoreResult
  handleCreateNewTemplateClicked: () => void
}

const UserTemplatesContainer = ({
  template,
}: Props): React.FunctionComponentElement<Props> => {
  const { id } = useParams()
  console.log('id', id)

  const firestore = useFirestore()

  useEffect(() => {
    console.log('listen for id', id)
    firestore.get({
      collection: 'templates',
      where: [['templateId', '==', id]],
      storeAs: 'selectedTemplate',
    })
  }, [id])

  return (
    <TopNavLayout
      topNavButton={{ text: 'Browse', path: '/browse-templates' }}
      authIsRequired={true}
    >
      <ViewTemplate template={template} />
    </TopNavLayout>
  )
}
const mapStateToProps = (state: RootState): any => ({
  template: firebaseViewUseTemplateSelectors.selectSelectedTemplate(state),
})

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>): any => ({
  handleCreateNewTemplateClicked: (): void => undefined,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserTemplatesContainer)
