import React, { Dispatch, ReactNode } from 'react'
import { connect } from 'react-redux'
import { AnyAction } from 'redux'
import { signInGoogle } from '../../../../modules/App/App.actions'
import { RootState } from '../../../redux/types'
import { TopNavLayout } from '../components/TopNavLayout'
import { navigateToCreateTemplate, navigateToHome } from '../TopNav.actions'
import { NavigationItem } from '../types'

export interface Props {
  children: ReactNode
  handleHomeClicked?: () => void
  handleNavigationItemClicked?: (navigationItem: NavigationItem) => void
  selectedNavigationItem?: NavigationItem
}

const navigationItemToActionMap: { [key in NavigationItem]: AnyAction } = {
  [NavigationItem.Create]: navigateToCreateTemplate(),
  [NavigationItem.SignIn]: signInGoogle(),
}

const TopNavLayoutContainer = ({
  children,
  handleHomeClicked,
  handleNavigationItemClicked,
  selectedNavigationItem,
}: Props): React.FunctionComponentElement<Props> => (
  <TopNavLayout
    handleHomeClicked={handleHomeClicked}
    selectedNavigationItem={selectedNavigationItem!}
    handleNavigationItemClicked={handleNavigationItemClicked!}
  >
    {children}
  </TopNavLayout>
)

const mapStateToProps = (state: RootState): any => ({
  // selectedNavigationItem: TopNavLayoutSelectors.selectActiveNavigationItem(
  //   state,
  // ),
})

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>): any => ({
  handleNavigationItemClicked: (navigationItemClicked: NavigationItem): void =>
    dispatch(navigationItemToActionMap[navigationItemClicked]),
  handleHomeClicked: (): void => dispatch(navigateToHome()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TopNavLayoutContainer)
