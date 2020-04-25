import React, { ReactNode } from 'react'
import { NavigationItem, TopNavType } from '../../types'
import { TopNav } from '../TopNav'
import styles from './TopNavLayout.module.scss'

export interface Props {
  children?: ReactNode
  handleHomeClicked?: () => void
  handleNavigationItemClicked: (navigationItemClicked: NavigationItem) => void
  selectedNavigationItem: NavigationItem
  topNavType: TopNavType
}

export const TopNavLayout: React.FunctionComponent<Props> = ({
  children,
  topNavType,
  handleHomeClicked,
  handleNavigationItemClicked,
  selectedNavigationItem,
}) => (
  <div className={styles.container}>
    <nav className={styles.TopNav}>
      <TopNav
        topNavType={topNavType}
        handleHomeClicked={handleHomeClicked}
        handleNavigationItemClicked={handleNavigationItemClicked}
        selectedNavigationItem={selectedNavigationItem}
      />
    </nav>
    <div className={styles.children}>{children}</div>
  </div>
)
