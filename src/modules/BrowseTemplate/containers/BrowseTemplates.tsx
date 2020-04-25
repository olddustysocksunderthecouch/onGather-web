import React, { Dispatch } from 'react'
import { connect } from 'react-redux'
import { AnyAction } from 'redux'
import TopNavLayout from '../../../common/modules/TopNav/containers/TopNavLayout'
import { TopNavType } from '../../../common/modules/TopNav/types'
import { ConnectedReduxProps } from '../../../common/redux/types'
import { BrowseTemplates } from '../components/BrowseTemplates'

interface Props extends ConnectedReduxProps<AnyAction> {
  dummyText: string
}

const BrowseTemplatesContainer = ({
  dummyText,
}: Props): React.FunctionComponentElement<Props> => (
  <TopNavLayout topNavType={TopNavType.Home}>
    <BrowseTemplates templates={[]} />
  </TopNavLayout>
)

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>): any => ({
  handleGotItClicked: (): void => undefined,
})

export default connect(null, mapDispatchToProps)(BrowseTemplatesContainer)
