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
  triggerUnsplashImageDownload,
} from '../UserTemplates.actions'

interface Props extends ConnectedReduxProps<AnyAction> {
  selectedTemplateId: string
  loading: string | null
  error: string | null
  handleSaveDraftClicked: (template: TemplateCreation) => void
  handlePublishClicked: (template: TemplateCreation) => void
  initialTemplateEditorData: TemplateEditorState
  imageSearchResults: ImageSearchResult[]
  totalImagesAvailable: number
  handleFetchImages: (searchTerm: string, page: number) => void
  handleImageSelected: (downloadLink: string) => void
  areNextImagesLoading: boolean
  searchTerm: string
}

const CreateTemplateContainer = ({
  selectedTemplateId,
  loading,
  error,
  searchTerm,
  initialTemplateEditorData,
  handleSaveDraftClicked,
  handlePublishClicked,
  imageSearchResults,
  totalImagesAvailable,
  handleImageSelected,
  handleFetchImages,
  areNextImagesLoading,
}: Props): React.FunctionComponentElement<Props> => (
  <TopNavLayout authIsRequired activeNavPath="/create-template">
    <CreateTemplate
      selectedTemplateId={selectedTemplateId}
      loading={loading}
      error={error}
      searchTerm={searchTerm}
      handleImageSelected={handleImageSelected}
      initialTemplateEditorData={initialTemplateEditorData}
      handleSaveDraftClicked={handleSaveDraftClicked}
      handlePublishClicked={handlePublishClicked}
      imageSearchResults={imageSearchResults}
      totalImagesAvailable={totalImagesAvailable}
      handleFetchImages={handleFetchImages}
      areNextImagesLoading={areNextImagesLoading}
    />
  </TopNavLayout>
)
const mapStateToProps = (state: RootState): any => ({
  selectedTemplateId: CreateTemplateSelectors.selectSelectedTemplateId(state),
  error: CreateTemplateSelectors.selectTemplateEditorError(state),
  loading: CreateTemplateSelectors.selectTemplateEditorLoading(state),
  searchTerm: CreateTemplateSelectors.selectImageSearchTerm(state),
  initialTemplateEditorData: CreateTemplateSelectors.selectTemplateEditor(
    state,
  ),
  imageSearchResults: CreateTemplateSelectors.selectImageSearchResults(state),
  totalImagesAvailable: CreateTemplateSelectors.selectImageSearchTotalPagesAvailable(
    state,
  ),
  areNextImagesLoading: CreateTemplateSelectors.selectImageSearchResultsLoading(
    state,
  ),
})

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>): any => ({
  handleSaveDraftClicked: (template: TemplateCreation): void =>
    dispatch(saveDraftTemplate(template)),
  handlePublishClicked: (template: TemplateCreation): void =>
    dispatch(publishTemplate(template)),
  handleImageSelected: (downloadLink: string): void =>
    dispatch(triggerUnsplashImageDownload(downloadLink)),
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
