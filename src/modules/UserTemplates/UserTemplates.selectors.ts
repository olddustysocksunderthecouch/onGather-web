import { createSelector } from 'reselect'
import { RootState } from '../../common/redux/types'
import { UserTemplatesState, TemplateEditorState } from './types'

export const selectCreateTemplate = (state: RootState): UserTemplatesState =>
  state.createTemplate

export const selectTemplateEditor = createSelector(
  selectCreateTemplate,
  (createTemplate: UserTemplatesState): TemplateEditorState =>
    createTemplate.templateEditor,
)

export const selectTemplateEditorLoading = createSelector(
  selectTemplateEditor,
  (templateEditor: TemplateEditorState): string => templateEditor.loading,
)

export const selectTemplateEditorError = createSelector(
  selectTemplateEditor,
  (templateEditor: TemplateEditorState): string => templateEditor.error,
)
