import { createSelector } from 'reselect'
import { RootState } from '../../common/redux/types'
import {
  ImageSearch,
  ImageSearchResult,
  TemplateEditorState,
  UserTemplatesState,
} from './types'

export const selectUserTemplates = (state: RootState): UserTemplatesState =>
  state.userTemplates

export const selectTemplateEditor = createSelector(
  selectUserTemplates,
  (userTemplates: UserTemplatesState): TemplateEditorState =>
    userTemplates.templateEditor,
)

export const selectSelectedTemplateId = createSelector(
  selectUserTemplates,
  (userTemplates: UserTemplatesState): string =>
    userTemplates.selectedTemplateId,
)

export const selectImageSearch = createSelector(
  selectUserTemplates,
  (userTemplates: UserTemplatesState): ImageSearch => userTemplates.imageSearch,
)

export const selectImageSearchTerm = createSelector(
  selectImageSearch,
  (imageSearch: ImageSearch): string | null => imageSearch.searchTerm,
)

export const selectImageSearchResults = createSelector(
  selectImageSearch,
  (imageSearch: ImageSearch): ImageSearchResult[] =>
    imageSearch.imageSearchResults,
)

export const selectImageSearchResultsLoading = createSelector(
  selectImageSearch,
  (imageSearch: ImageSearch): boolean => imageSearch.loading,
)

export const selectTemplateEditorLoading = createSelector(
  selectTemplateEditor,
  (templateEditor: TemplateEditorState): string => templateEditor.loading,
)

export const selectTemplateEditorError = createSelector(
  selectTemplateEditor,
  (templateEditor: TemplateEditorState): string => templateEditor.error,
)
