import React from 'react'
import { connect } from 'react-redux'
import { AnyAction } from 'redux'
import TopNavLayout from '../../../common/modules/TopNav/containers/TopNavLayout'
import { ConnectedReduxProps } from '../../../common/redux/types'
import { Home } from '../components/Home'

const HomeContainer = (): React.FunctionComponentElement<
  ConnectedReduxProps<AnyAction>
> => (
  <TopNavLayout topNavButton={{ text: 'Templates', path: '/user-templates' }}>
    <Home />
  </TopNavLayout>
)

export default connect(null, null)(HomeContainer)
