import React, { Dispatch, ReactNode } from 'react'
import { connect } from 'react-redux'
import { AnyAction } from 'redux'
import { RootState } from '../../../redux/types'
import { navigateToProfile, navigateToSearch } from '../TopNav.actions'
import { TopNavLayout } from '../components/TopNavLayout'
import { NavigationItem } from '../types'
import { selectors as TopNavLayoutSelectors } from '../index'

export interface Props {
  children: ReactNode
  handleNavigationItemClicked?: (navigationItem: NavigationItem) => void
  selectedNavigationItem?: NavigationItem
}

const navigationItemToActionMap: { [key in NavigationItem]: AnyAction } = {
  [NavigationItem.Search]: navigateToSearch(),
  [NavigationItem.Profile]: navigateToProfile(),
}

const TopNavLayoutContainer = ({
  children,
  handleNavigationItemClicked,
  selectedNavigationItem,
}: Props): React.FunctionComponentElement<Props> => (
  <TopNavLayout
    selectedNavigationItem={selectedNavigationItem!}
    handleNavigationItemClicked={handleNavigationItemClicked!}
  >
    {children}
  </TopNavLayout>
)

const mapStateToProps = (state: RootState): any => ({
  selectedNavigationItem: TopNavLayoutSelectors.selectActiveNavigationItem(
    state,
  ),
})

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>): any => ({
  handleNavigationItemClicked: (navigationItemClicked: NavigationItem): void =>
    dispatch(navigationItemToActionMap[navigationItemClicked]),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TopNavLayoutContainer)
