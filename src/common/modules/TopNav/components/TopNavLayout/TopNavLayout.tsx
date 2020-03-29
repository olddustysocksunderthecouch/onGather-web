import React, { ReactNode } from 'react'
import { NavigationItem } from '../../types'
import { TopNav } from '../TopNav'
import styles from './TopNavLayout.module.scss'

export interface Props {
  children?: ReactNode
  handleNavigationItemClicked: (navigationItemClicked: NavigationItem) => void
  selectedNavigationItem: NavigationItem
}

export const TopNavLayout: React.FunctionComponent<Props> = ({
  children,
  handleNavigationItemClicked,
  selectedNavigationItem,
}) => (
  <div className={styles.container}>
    <div className={styles.TopNav}>
      <TopNav
        handleNavigationItemClicked={handleNavigationItemClicked}
        selectedNavigationItem={selectedNavigationItem}
      />
    </div>
    <div className={styles.children}>{children}</div>
  </div>
)
