import { createSelector } from 'reselect'
import { RootState } from '../../common/redux/types'
import {
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

export const selectImageSearchResults = createSelector(
  selectUserTemplates,
  (userTemplates: UserTemplatesState): ImageSearchResult[] =>
    userTemplates.imageSearch.imageSearchResults,
)

export const selectImageSearchResultsLoading = createSelector(
  selectUserTemplates,
  (userTemplates: UserTemplatesState): boolean =>
    userTemplates.imageSearch.loading,
)

export const selectTemplateEditorLoading = createSelector(
  selectTemplateEditor,
  (templateEditor: TemplateEditorState): string => templateEditor.loading,
)

export const selectTemplateEditorError = createSelector(
  selectTemplateEditor,
  (templateEditor: TemplateEditorState): string => templateEditor.error,
)
