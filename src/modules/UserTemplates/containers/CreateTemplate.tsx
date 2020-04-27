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
import { setEditorTemplateData } from '../UserTemplates.actions'

interface Props extends ConnectedReduxProps<AnyAction> {
  loading: string | null
  error: string | null
  handleTemplateDataChange: (template: TemplateCreation) => void
  handleImageSelected: (url: string) => void
}

const CreateTemplateContainer = ({
  loading,
  error,
  handleTemplateDataChange,
  handleImageSelected,
}: Props): React.FunctionComponentElement<Props> => (
  <TopNavLayout topNavType={TopNavType.CreateTemplate}>
    <CreateTemplate
      loading={loading}
      error={error}
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
  handleTemplateDataChange: debounce(
    (template: TemplateCreation): void =>
      dispatch(setEditorTemplateData(template)),
    300,
  ),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateTemplateContainer)
