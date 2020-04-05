import React, { Dispatch } from 'react'
import { connect } from 'react-redux'
import { AnyAction } from 'redux'
import BottomNavLayout from '../../../common/modules/TopNav/containers/TopNavLayout'
import { Home } from '../components/Home'

const HomeContainer = (): React.ReactElement => (
  <BottomNavLayout>
    <Home />
  </BottomNavLayout>
)

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>): any => ({
  handleGotItClicked: (): void => undefined,
})

export default connect(null, mapDispatchToProps)(HomeContainer)
