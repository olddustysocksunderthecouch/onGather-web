import { debounce } from 'debounce'
import React, { Dispatch } from 'react'
import { connect } from 'react-redux'
import { AnyAction } from 'redux'
import BottomNavLayout from '../../../common/modules/TopNav/containers/TopNavLayout'
import { TopNavType } from '../../../common/modules/TopNav/types'
import { ConnectedReduxProps } from '../../../common/redux/types'
import { CreateTemplate } from '../components/CreateTemplate'
import { setEditorTemplateData } from '../CreateTemplate.actions'
import { Template } from '../types'

interface Props extends ConnectedReduxProps<AnyAction> {
  handleTemplateDataChange: (template: Template) => void
}

const CreateTemplateContainer = ({
  handleTemplateDataChange,
}: Props): React.FunctionComponentElement<Props> => (
  <BottomNavLayout topNavType={TopNavType.CreateTemplate}>
    <CreateTemplate handleTemplateDataChange={handleTemplateDataChange} />
  </BottomNavLayout>
)

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>): any => ({
  handleTemplateDataChange: debounce(
    (template: Template): void => dispatch(setEditorTemplateData(template)),
    300,
  ),
})

export default connect(null, mapDispatchToProps)(CreateTemplateContainer)
