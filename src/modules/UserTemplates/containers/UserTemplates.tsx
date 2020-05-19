import React, { Dispatch, useEffect } from 'react'
import { connect } from 'react-redux'
import { useFirestore } from 'react-redux-firebase'
import { AnyAction } from 'redux'
import { selectors as firebaseSelectors } from '../../../common/modules/firebase'
import TopNavLayout from '../../../common/modules/TopNav/containers/TopNavLayout'
import { ConnectedReduxProps, RootState } from '../../../common/redux/types'
import { Template } from '../../../common/types'
import { UserTemplates } from '../components/UserTemplates'
import { firebaseSelectors as userTemplatesSelectors } from '../index'
import {
  createNewTemplate,
  editExistingTemplate,
  searchForImages,
} from '../UserTemplates.actions'

interface Props extends ConnectedReduxProps<AnyAction> {
  uid: string | null
  draftTemplates: Template[]
  publishedTemplates: Template[]
  handleTemplateClicked: (templateId: string, type: string) => void
  handleCreateNewTemplateClicked: () => void
}

const UserTemplatesContainer = ({
  uid,
  draftTemplates,
  publishedTemplates,
  handleTemplateClicked,
  handleCreateNewTemplateClicked,
}: Props): React.FunctionComponentElement<Props> => {
  const firestore = useFirestore()
  useEffect(() => {
    if (uid) {
      firestore.setListeners([
        {
          collection: 'templates',
          where: [
            ['uid', '==', uid],
            ['status', '==', 'publish'],
          ],
          storeAs: 'userPublished',
        },
        {
          collection: 'templates',
          where: [
            ['uid', '==', uid],
            ['status', '==', 'draft'],
          ],
          storeAs: 'userDrafts',
        },
      ])
    }
    // eslint-disable-next-line
  }, [uid])

  return (
    <TopNavLayout
      topNavButton={{ text: 'Browse', path: '/browse-templates' }}
      authIsRequired={true}
    >
      <UserTemplates
        draftTemplates={draftTemplates}
        publishedTemplates={publishedTemplates}
        handleTemplateClicked={handleTemplateClicked}
        handleCreateNewTemplateClicked={handleCreateNewTemplateClicked}
      />
    </TopNavLayout>
  )
}
const mapStateToProps = (state: RootState): any => ({
  uid: firebaseSelectors.selectUid(state),
  draftTemplates: userTemplatesSelectors.selectUserTemplateDrafts(state),
  publishedTemplates: userTemplatesSelectors.selectUserTemplatePublished(state),
})

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>): any => ({
  handleTemplateClicked: (templateId: string, type: string): void => {
    dispatch(editExistingTemplate(templateId, type))
  },
  handleCreateNewTemplateClicked: (): void => dispatch(createNewTemplate()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserTemplatesContainer)
