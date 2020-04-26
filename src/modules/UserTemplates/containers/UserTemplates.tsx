import { debounce } from 'debounce'
import React, { Dispatch } from 'react'
import { connect } from 'react-redux'
import { useFirestoreConnect } from 'react-redux-firebase'
import { AnyAction } from 'redux'
import TopNavLayout from '../../../common/modules/TopNav/containers/TopNavLayout'
import { TopNavType } from '../../../common/modules/TopNav/types'
import { ConnectedReduxProps, RootState } from '../../../common/redux/types'
import { UserTemplates } from '../components/UserTemplates'
import { firebaseSelectors as UserTemplatesSelectors } from '../index'
import { setEditorTemplateData } from '../UserTemplates.actions'
import { Template } from '../../../common/types'

interface Props extends ConnectedReduxProps<AnyAction> {
  draftTemplates: Template[]
  publishedTemplates: Template[]
}

const UserTemplatesContainer = ({
  draftTemplates,
  publishedTemplates,
}: Props): React.FunctionComponentElement<Props> => {
  useFirestoreConnect([
    {
      collection: 'templates',
      where: [
        ['uid', '==', '6tfDw1jzmDe8BzMOfZxeHaqgXgs2'],
        ['status', '==', 'published'],
      ],
      storeAs: 'userPublished',
    },
  ])
  useFirestoreConnect([
    {
      collection: 'templates',
      where: [
        ['uid', '==', '6tfDw1jzmDe8BzMOfZxeHaqgXgs2'],
        ['status', '==', 'draft'],
      ],
      storeAs: 'userDrafts',
    },
  ])

  return (
    <TopNavLayout topNavType={TopNavType.UserTemplates}>
      <UserTemplates
        draftTemplates={draftTemplates}
        publishedTemplates={publishedTemplates}
      />
    </TopNavLayout>
  )
}
const mapStateToProps = (state: RootState): any => ({
  draftTemplates: UserTemplatesSelectors.selectUserTemplateDrafts(state),
  publishedTemplates: UserTemplatesSelectors.selectUserTemplatePublished(state),
})

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>): any => ({
  handleTemplateDataChange: debounce(
    (template: Template): void => dispatch(setEditorTemplateData(template)),
    300,
  ),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserTemplatesContainer)
