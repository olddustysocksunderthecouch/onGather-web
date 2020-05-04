import { debounce } from 'debounce'
import React, { Dispatch } from 'react'
import { connect } from 'react-redux'
import { AnyAction } from 'redux'
import TopNavLayout from '../../../common/modules/TopNav/containers/TopNavLayout'
import { TopNavType } from '../../../common/modules/TopNav/types'
import { ConnectedReduxProps, RootState } from '../../../common/redux/types'
import { TemplateCreation } from '../../../common/types'
import { CreateTemplate } from '../components/CreateTemplate'
import { selectors as CreateTemplateSelectors } from '../index'
import {
  saveDraftTemplate,
  setEditorTemplateData,
  uploadImage,
  publishTemplate,
} from '../UserTemplates.actions'

interface Props extends ConnectedReduxProps<AnyAction> {
  loading: string | null
  error: string | null
  handleTemplateDataChange: (template: TemplateCreation) => void
  handleImageSelected: (url: File) => void
  handleSaveDraftClicked: () => void
  handlePublishClicked: () => void
}

const CreateTemplateContainer = ({
  loading,
  error,
  handleSaveDraftClicked,
  handlePublishClicked,
  handleTemplateDataChange,
  handleImageSelected,
}: Props): React.FunctionComponentElement<Props> => (
  <TopNavLayout topNavType={TopNavType.CreateTemplate}>
    <CreateTemplate
      loading={loading}
      error={error}
      handleSaveDraftClicked={handleSaveDraftClicked}
      handlePublishClicked={handlePublishClicked}
      handleTemplateDataChange={handleTemplateDataChange}
      handleImageSelected={handleImageSelected}
    />
  </TopNavLayout>
)
const mapStateToProps = (state: RootState): any => ({
  error: CreateTemplateSelectors.selectTemplateEditorError(state),
  loading: CreateTemplateSelectors.selectTemplateEditorLoading(state),
})

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>): any => ({
  handleSaveDraftClicked: (): void => dispatch(saveDraftTemplate()),
  handlePublishClicked: (): void => dispatch(publishTemplate()),
  handleTemplateDataChange: debounce(
    (template: TemplateCreation): void =>
      dispatch(setEditorTemplateData(template)),
    300,
  ),
  handleImageSelected: (file: File): void => dispatch(uploadImage(file)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateTemplateContainer)
