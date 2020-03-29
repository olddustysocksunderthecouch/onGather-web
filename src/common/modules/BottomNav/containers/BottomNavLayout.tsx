import React, { Dispatch, ReactNode } from 'react'
import { connect } from 'react-redux'
import { AnyAction } from 'redux'
import { RootState } from '../../../redux/types'
import { navigateToProfile, navigateToSearch } from '../BottomNav.actions'
import { BottomNavLayout } from '../components/BottomNavLayout'
import { NavigationItem } from '../types'
import { selectors as BottomNavLayoutSelectors } from './../index'

export interface Props {
  children: ReactNode
  handleNavigationItemClicked?: (navigationItem: NavigationItem) => void
  selectedNavigationItem?: NavigationItem
}

const navigationItemToActionMap: { [key in NavigationItem]: AnyAction } = {
  [NavigationItem.Search]: navigateToSearch(),
  [NavigationItem.Profile]: navigateToProfile(),
}

const BottomNavLayoutContainer = ({
  children,
  handleNavigationItemClicked,
  selectedNavigationItem,
}: Props): React.FunctionComponentElement<Props> => (
  <BottomNavLayout
    selectedNavigationItem={selectedNavigationItem!}
    handleNavigationItemClicked={handleNavigationItemClicked!}
  >
    {children}
  </BottomNavLayout>
)

const mapStateToProps = (state: RootState): any => ({
  selectedNavigationItem: BottomNavLayoutSelectors.selectActiveNavigationItem(
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
)(BottomNavLayoutContainer)
