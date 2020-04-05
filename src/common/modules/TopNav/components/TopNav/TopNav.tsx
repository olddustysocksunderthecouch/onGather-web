import classes from 'classnames'
import React from 'react'
import { NavigationItem } from '../../types'
import onGatherLogo from './../../assets/onGatherLogo.svg'
import styles from './TopNav.module.scss'

export interface Props {
  handleNavigationItemClicked: (navigationItemClicked: NavigationItem) => void
  selectedNavigationItem: NavigationItem
}

export const TopNav: React.FunctionComponent<Props> = ({
  handleNavigationItemClicked,
  selectedNavigationItem,
}) => {
  const topNavItemStyle = (navigationItem: NavigationItem): object => {
    return {
      [styles.topNavItem]: true,
      [styles.topNavItemSelected]: selectedNavigationItem === navigationItem,
    }
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.onGatherLogo}>onGather</h1>
      <div className={styles.callsToAction}>
        <div
          className={classes(topNavItemStyle(NavigationItem.Search))}
          onClick={(): void =>
            handleNavigationItemClicked(NavigationItem.Search)
          }
          data-testid="searchIconContainer"
        >
          <p>Create</p>
        </div>
        <div
          className={classes(topNavItemStyle(NavigationItem.Profile))}
          onClick={(): void =>
            handleNavigationItemClicked(NavigationItem.Profile)
          }
          data-testid="profileIconContainer"
        >
          <p>Login</p>
        </div>
      </div>
    </div>
  )
}
