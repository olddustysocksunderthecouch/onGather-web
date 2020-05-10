import { createSelector } from 'reselect'
import { RootState } from '../../common/redux/types'
import { TemplateEditorState, UserTemplatesState } from './types'

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

export const selectTemplateEditorLoading = createSelector(
  selectTemplateEditor,
  (templateEditor: TemplateEditorState): string => templateEditor.loading,
)

export const selectTemplateEditorError = createSelector(
  selectTemplateEditor,
  (templateEditor: TemplateEditorState): string => templateEditor.error,
)
