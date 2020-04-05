import React, { ReactNode } from 'react'
import { NavigationItem } from '../../types'
import { TopNav } from '../TopNav'
import styles from './TopNavLayout.module.scss'

export interface Props {
  children?: ReactNode
  handleHomeClicked?: () => void
  handleNavigationItemClicked: (navigationItemClicked: NavigationItem) => void
  selectedNavigationItem: NavigationItem
}

export const TopNavLayout: React.FunctionComponent<Props> = ({
  children,
  handleHomeClicked,
  handleNavigationItemClicked,
  selectedNavigationItem,
}) => (
  <div className={styles.container}>
    <div className={styles.TopNav}>
      <TopNav
        handleHomeClicked={handleHomeClicked}
        handleNavigationItemClicked={handleNavigationItemClicked}
        selectedNavigationItem={selectedNavigationItem}
      />
    </div>
    <div className={styles.children}>{children}</div>
  </div>
)
