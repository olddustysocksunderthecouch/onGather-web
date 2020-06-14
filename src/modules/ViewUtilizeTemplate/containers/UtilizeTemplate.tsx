import React, { Dispatch, useEffect } from 'react'
import { connect } from 'react-redux'
import { useFirestore } from 'react-redux-firebase'
import { useParams } from 'react-router-dom'
import { AnyAction } from 'redux'
import { selectors as firebaseSelectors } from '../../../common/modules/firebase'
import TopNavLayout from '../../../common/modules/TopNav/containers/TopNavLayout'
import { ConnectedReduxProps, RootState } from '../../../common/redux/types'
import { Gathering, Template } from '../../../common/types'
import { selectors as authSelectors } from '../../Auth'
import {
  fetchScopes,
  requestScope,
  signInGoogle,
} from '../../Auth/Auth.actions'
import { UtilizeTemplate } from '../components/UtilizeTemplate'
import { firebaseSelectors as firebaseViewUseTemplateSelectors } from '../index'

interface Props extends ConnectedReduxProps<AnyAction> {
  calendarEventScopeIsEnabled: boolean
  template: Template
  shouldFetchScope: boolean
  isAuthenticated: boolean
  scopeIsGranted: boolean
  handleUseTemplateClicked: () => void
  handleFetchScopes: () => void
  handleContinueWithGoogleClicked: () => void
  handleScopeRequest: (templateEditSend: Gathering) => void
}

const UtilizeTemplateContainer = ({
  template,
  isAuthenticated,
  scopeIsGranted,
  handleUseTemplateClicked,
  handleFetchScopes,
  handleScopeRequest,
  handleContinueWithGoogleClicked,
}: Props): React.FunctionComponentElement<Props> => {
  const { id } = useParams()
  const firestore = useFirestore()

  useEffect(() => {
    if (isAuthenticated && !scopeIsGranted) {
      handleFetchScopes()
    }
  }, [isAuthenticated, !scopeIsGranted])

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
        scopeIsGranted={scopeIsGranted}
        handleUseTemplateClicked={handleUseTemplateClicked}
        handleContinueWithGoogleClicked={handleContinueWithGoogleClicked}
        handleScopeRequest={handleScopeRequest}
      />
    </TopNavLayout>
  )
}
const mapStateToProps = (state: RootState): any => ({
  isAuthenticated: firebaseSelectors.selectIsAuthenticated(state),
  template: firebaseViewUseTemplateSelectors.selectSelectedTemplate(state),
  shouldFetchScope: authSelectors.selectShouldFetchScope(state),
  scopeIsGranted: authSelectors.selectCalendarEventScopeIsGranted(state),
})

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>): any => ({
  handleScopeRequest: (templateEditSend: Gathering): void =>
    dispatch(requestScope(templateEditSend)),
  handleFetchScopes: (): void => dispatch(fetchScopes()),
  handleContinueWithGoogleClicked: (): void => dispatch(signInGoogle()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UtilizeTemplateContainer)
