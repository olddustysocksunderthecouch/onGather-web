import React, { Dispatch, useEffect } from 'react'
import { connect } from 'react-redux'
import { useFirestore } from 'react-redux-firebase'
import { useParams } from 'react-router-dom'
import { AnyAction } from 'redux'
import TopNavLayout from '../../../common/modules/TopNav/containers/TopNavLayout'
import { ConnectedReduxProps, RootState } from '../../../common/redux/types'
import { Template } from '../../../common/types'
import { UtilizeTemplate } from '../components/UtilizeTemplate'
import { firebaseSelectors as firebaseViewUseTemplateSelectors } from '../index'
import { utilizeTemplate } from '../ViewUseTemplate.actions'

interface Props extends ConnectedReduxProps<AnyAction> {
  template: Template
  handleUseTemplateClicked: () => void
}

const UtilizeTemplateContainer = ({
  template,
  handleUseTemplateClicked,
}: Props): React.FunctionComponentElement<Props> => {
  const { id } = useParams()
  const firestore = useFirestore()

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
        template={template}
        // handleUseTemplateClicked={handleUseTemplateClicked}
      />
    </TopNavLayout>
  )
}
const mapStateToProps = (state: RootState): any => ({
  template: firebaseViewUseTemplateSelectors.selectSelectedTemplate(state),
})

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>): any => ({
  handleUseTemplateClicked: (): void => dispatch(utilizeTemplate()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UtilizeTemplateContainer)
