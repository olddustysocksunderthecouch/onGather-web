import { debounce } from 'debounce'
import React, { Dispatch } from 'react'
import { connect } from 'react-redux'
import { AnyAction } from 'redux'
import TopNavLayout from '../../../common/modules/TopNav/containers/TopNavLayout'
import { TopNavType } from '../../../common/modules/TopNav/types'
import { ConnectedReduxProps, RootState } from '../../../common/redux/types'
import { UserTemplates } from '../components/UserTemplates'
import { firebaseSelectors as UserTemplatesSelectors } from '../index'
import { Template } from '../types'
import { setEditorTemplateData } from '../UserTemplates.actions'
import { useFirestoreConnect } from 'react-redux-firebase'

interface Props extends ConnectedReduxProps<AnyAction> {
  draftTemplates: Template[]
}

const UserTemplatesContainer = ({
  draftTemplates,
}: Props): React.FunctionComponentElement<Props> => {
  useFirestoreConnect([
    {
      collection: 'templates',
      where: ['uid', '==', '6tfDw1jzmDe8BzMOfZxeHaqgXgs2'],
    },
  ])

  return (
    <TopNavLayout topNavType={TopNavType.UserTemplates}>
      <UserTemplates draftTemplates={draftTemplates} />
    </TopNavLayout>
  )
}
const mapStateToProps = (state: RootState): any => ({
  draftTemplates: UserTemplatesSelectors.selectUserTemplateDrafts(state),
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
