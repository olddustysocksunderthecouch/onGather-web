import { debounce } from 'debounce'
import React, { Dispatch } from 'react'
import { connect } from 'react-redux'
import { AnyAction } from 'redux'
import TopNavLayout from '../../../common/modules/TopNav/containers/TopNavLayout'
import { TopNavType } from '../../../common/modules/TopNav/types'
import { ConnectedReduxProps, RootState } from '../../../common/redux/types'
import { CreateTemplate } from '../components/CreateTemplate'
import { setEditorTemplateData } from '../UserTemplates.actions'
import { Template } from '../types'
import { selectors as CreateTemplateSelectors } from '../index'

interface Props extends ConnectedReduxProps<AnyAction> {
  loading: string | null
  error: string | null
  handleTemplateDataChange: (template: Template) => void
}

const CreateTemplateContainer = ({
  loading,
  error,
  handleTemplateDataChange,
}: Props): React.FunctionComponentElement<Props> => (
  <TopNavLayout topNavType={TopNavType.CreateTemplate}>
    <CreateTemplate
      loading={loading}
      error={error}
      handleTemplateDataChange={handleTemplateDataChange}
    />
  </TopNavLayout>
)
const mapStateToProps = (state: RootState): any => ({
  error: CreateTemplateSelectors.selectTemplateEditorError(state),
  loading: CreateTemplateSelectors.selectTemplateEditorLoading(state),
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
)(CreateTemplateContainer)
