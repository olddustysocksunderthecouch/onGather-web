import React, { Dispatch } from 'react'
import { connect } from 'react-redux'
import { AnyAction } from 'redux'
import TopNavLayout from '../../../common/modules/TopNav/containers/TopNavLayout'
import { TopNavType } from '../../../common/modules/TopNav/types'
import { ConnectedReduxProps } from '../../../common/redux/types'
import { Home } from '../components/Home'

interface Props extends ConnectedReduxProps<AnyAction> {
  handleClick: () => void
}

const HomeContainer = ({
  handleClick,
}: Props): React.FunctionComponentElement<Props> => (
  <TopNavLayout topNavType={TopNavType.Home}>
    <Home handleClick={handleClick} />
  </TopNavLayout>
)

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>): any => ({
  handleClick: (): void => undefined,
})

export default connect(null, mapDispatchToProps)(HomeContainer)
