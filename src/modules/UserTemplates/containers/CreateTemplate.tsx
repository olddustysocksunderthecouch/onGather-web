import { debounce } from 'debounce'
import React, { Dispatch } from 'react'
import { connect } from 'react-redux'
import { AnyAction } from 'redux'
import TopNavLayout from '../../../common/modules/TopNav/containers/TopNavLayout'
import { ConnectedReduxProps, RootState } from '../../../common/redux/types'
import { TemplateCreation } from '../../../common/types'
import { CreateTemplate } from '../components/CreateTemplate'
import { selectors as CreateTemplateSelectors } from '../index'
import { ImageSearchResult, TemplateEditorState } from '../types'
import {
  publishTemplate,
  saveDraftTemplate,
  searchForImages,
  uploadImage,
} from '../UserTemplates.actions'

interface Props extends ConnectedReduxProps<AnyAction> {
  selectedTemplateId: string
  loading: string | null
  error: string | null
  handleSaveDraftClicked: (template: TemplateCreation) => void
  handlePublishClicked: (template: TemplateCreation) => void
  initialTemplateEditorData: TemplateEditorState
  imageSearchResults: ImageSearchResult[]
  handleFetchImages: (searchTerm: string, page: number) => void
  areNextImagesLoading: boolean
}

const CreateTemplateContainer = ({
  selectedTemplateId,
  loading,
  error,
  initialTemplateEditorData,
  handleSaveDraftClicked,
  handlePublishClicked,
  imageSearchResults,
  handleFetchImages,
  areNextImagesLoading,
}: Props): React.FunctionComponentElement<Props> => (
  <TopNavLayout>
    <CreateTemplate
      selectedTemplateId={selectedTemplateId}
      loading={loading}
      error={error}
      initialTemplateEditorData={initialTemplateEditorData}
      handleSaveDraftClicked={handleSaveDraftClicked}
      handlePublishClicked={handlePublishClicked}
      imageSearchResults={imageSearchResults}
      handleFetchImages={handleFetchImages}
      areNextImagesLoading={areNextImagesLoading}
    />
  </TopNavLayout>
)
const mapStateToProps = (state: RootState): any => ({
  selectedTemplateId: CreateTemplateSelectors.selectSelectedTemplateId(state),
  error: CreateTemplateSelectors.selectTemplateEditorError(state),
  loading: CreateTemplateSelectors.selectTemplateEditorLoading(state),
  initialTemplateEditorData: CreateTemplateSelectors.selectTemplateEditor(
    state,
  ),
  imageSearchResults: CreateTemplateSelectors.selectImageSearchResults(state),
  areNextImagesLoading: CreateTemplateSelectors.selectImageSearchResultsLoading(
    state,
  ),
})

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>): any => ({
  handleSaveDraftClicked: (template: TemplateCreation): void =>
    dispatch(saveDraftTemplate(template)),
  handlePublishClicked: (template: TemplateCreation): void =>
    dispatch(publishTemplate(template)),
  handleImageSelected: (file: File): void => dispatch(uploadImage(file)),
  handleFetchImages: debounce(
    (searchTerm: string, page: number): void =>
      dispatch(searchForImages(searchTerm, page)),
    300,
  ),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateTemplateContainer)
