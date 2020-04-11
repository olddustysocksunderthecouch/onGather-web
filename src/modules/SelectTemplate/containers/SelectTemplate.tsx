import React, { Dispatch } from 'react'
import { connect } from 'react-redux'
import { AnyAction } from 'redux'
import TopNavLayout from '../../../common/modules/TopNav/containers/TopNavLayout'
import { TopNavType } from '../../../common/modules/TopNav/types'
import { ConnectedReduxProps } from '../../../common/redux/types'
import { SelectTemplate } from '../components/SelectTemplate'

interface Props extends ConnectedReduxProps<AnyAction> {
  dummyText: string
}

const SelectTemplateContainer = ({
  dummyText = 'Search Container',
}: Props): React.FunctionComponentElement<Props> => (
  <TopNavLayout topNavType={TopNavType.Home}>
    <SelectTemplate dummyText={dummyText} />
  </TopNavLayout>
)

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>): any => ({
  handleGotItClicked: (): void => undefined,
})

export default connect(null, mapDispatchToProps)(SelectTemplateContainer)
