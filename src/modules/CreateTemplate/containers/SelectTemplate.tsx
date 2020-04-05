import React, { Dispatch } from 'react'
import { connect } from 'react-redux'
import { AnyAction } from 'redux'
import BottomNavLayout from '../../../common/modules/TopNav/containers/TopNavLayout'
import { ConnectedReduxProps } from '../../../common/redux/types'
import { CreateTemplate } from '../components/CreateTemplate'

interface Props extends ConnectedReduxProps<AnyAction> {
  dummyText: string
}

const CreateTemplateContainer = ({
  dummyText = 'CreateTemplate Container',
}: Props): React.FunctionComponentElement<Props> => (
  <BottomNavLayout>
    <CreateTemplate dummyText={dummyText} />
  </BottomNavLayout>
)

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>): any => ({
  handleGotItClicked: (): void => undefined,
})

export default connect(null, mapDispatchToProps)(CreateTemplateContainer)
