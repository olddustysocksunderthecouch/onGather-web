import React, { Dispatch } from 'react'
import { connect } from 'react-redux'
import { AnyAction } from 'redux'
import BottomNavLayout from '../../../common/modules/BottomNav/containers/BottomNavLayout'
import { ConnectedReduxProps } from '../../../common/redux/types'
import { Home } from '../components/Home'

interface Props extends ConnectedReduxProps<AnyAction> {
  dummyText: string
}

const HomeContainer = ({
  dummyText = 'Home Container',
}: Props): React.FunctionComponentElement<Props> => (
  <BottomNavLayout>
    <Home dummyText={dummyText} />
  </BottomNavLayout>
)

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>): any => ({
  handleGotItClicked: (): void => undefined,
})

export default connect(null, mapDispatchToProps)(HomeContainer)
