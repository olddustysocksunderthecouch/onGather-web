import React, { Dispatch } from 'react'
import { connect } from 'react-redux'
import { AnyAction } from 'redux'
import TopNavLayout from '../../../common/modules/TopNav/containers/TopNavLayout'
import { ConnectedReduxProps } from '../../../common/redux/types'
import { Home } from '../components/Home'
import { browseButtonClicked } from '../Home.actions'

interface Props extends ConnectedReduxProps<AnyAction> {
  handleBrowseButtonClicked: (buttonDescription: string) => void
}

const HomeContainer = ({
  handleBrowseButtonClicked,
}: Props): React.FunctionComponentElement<Props> => (
  <TopNavLayout topNavButton={{ text: 'Templates', path: '/user-templates' }}>
    <Home handleBrowseButtonClicked={handleBrowseButtonClicked} />
  </TopNavLayout>
)
const mapDispatchToProps = (dispatch: Dispatch<AnyAction>): any => ({
  handleBrowseButtonClicked: (buttonDescription: string): void =>
    dispatch(browseButtonClicked(buttonDescription)),
})

export default connect(null, mapDispatchToProps)(HomeContainer)
