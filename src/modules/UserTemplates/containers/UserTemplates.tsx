import { debounce } from 'debounce'
import React, { Dispatch, useEffect } from 'react'
import { connect } from 'react-redux'
import { useFirestore } from 'react-redux-firebase'
import { AnyAction } from 'redux'
import { selectors as firebaseSelectors } from '../../../common/modules/firebase'
import TopNavLayout from '../../../common/modules/TopNav/containers/TopNavLayout'
import { TopNavType } from '../../../common/modules/TopNav/types'
import { ConnectedReduxProps, RootState } from '../../../common/redux/types'
import { Template } from '../../../common/types'
import { UserTemplates } from '../components/UserTemplates'
import { firebaseSelectors as userTemplatesSelectors } from '../index'
import { setEditorTemplateData } from '../UserTemplates.actions'

interface Props extends ConnectedReduxProps<AnyAction> {
  uid: string | null
  draftTemplates: Template[]
  publishedTemplates: Template[]
}

const UserTemplatesContainer = ({
  uid,
  draftTemplates,
  publishedTemplates,
}: Props): React.FunctionComponentElement<Props> => {
  const firestore = useFirestore()
  useEffect(() => {
    if (uid) {
      firestore.setListeners([
        {
          collection: 'templates',
          where: [
            ['uid', '==', uid],
            ['status', '==', 'published'],
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
  }, [uid])

  // useEffect(() => {
  //   return (): void => {
  //     firestore.unsetListeners([
  //       {
  //         collection: 'templates',
  //         where: [
  //           ['uid', '==', uid],
  //           ['status', '==', 'published'],
  //         ],
  //         storeAs: 'userPublished',
  //       },
  //       {
  //         collection: 'templates',
  //         where: [
  //           ['uid', '==', uid],
  //           ['status', '==', 'draft'],
  //         ],
  //         storeAs: 'userDrafts',
  //       },
  //     ])
  //   }
  // }, [])

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
  uid: firebaseSelectors.selectUid(state),
  draftTemplates: userTemplatesSelectors.selectUserTemplateDrafts(state),
  publishedTemplates: userTemplatesSelectors.selectUserTemplatePublished(state),
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
