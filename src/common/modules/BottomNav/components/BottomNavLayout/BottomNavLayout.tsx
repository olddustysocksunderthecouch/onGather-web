import React, { ReactNode } from 'react'
import { NavigationItem } from '../../types'
import { BottomNav } from '../BottomNav'
import styles from './BottomNavLayout.module.scss'

export interface Props {
  children?: ReactNode
  handleNavigationItemClicked: (navigationItemClicked: NavigationItem) => void
  selectedNavigationItem: NavigationItem
}

export const BottomNavLayout: React.FunctionComponent<Props> = ({
  children,
  handleNavigationItemClicked,
  selectedNavigationItem,
}) => (
  <div className={styles.container}>
    <div className={styles.children}>{children}</div>
    <div className={styles.bottomNav}>
      <BottomNav
        handleNavigationItemClicked={handleNavigationItemClicked}
        selectedNavigationItem={selectedNavigationItem}
      />
    </div>
  </div>
)
