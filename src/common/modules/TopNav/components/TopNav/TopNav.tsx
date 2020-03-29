import classes from 'classnames'
import React from 'react'
import { NavigationItem } from '../../types'
import styles from './TopNav.module.scss'

export interface Props {
  handleNavigationItemClicked: (navigationItemClicked: NavigationItem) => void
  selectedNavigationItem: NavigationItem
}

export const TopNav: React.FunctionComponent<Props> = ({
  handleNavigationItemClicked,
  selectedNavigationItem,
}) => {
  const iconStyle = (navigationItem: NavigationItem): object => {
    return {
      [styles.iconSelected]: selectedNavigationItem === navigationItem,
      [styles.iconUnselected]: selectedNavigationItem !== navigationItem,
    }
  }

  return (
    <div className={styles.container}>
      <div
        className={classes(
          styles.buttonContainer,
          iconStyle(NavigationItem.Search),
        )}
        onClick={(): void => handleNavigationItemClicked(NavigationItem.Search)}
        data-testid="searchIconContainer"
      >
        <p>Create Gathering</p>
      </div>
      <div
        className={classes(
          styles.buttonContainer,
          iconStyle(NavigationItem.Profile),
        )}
        onClick={(): void =>
          handleNavigationItemClicked(NavigationItem.Profile)
        }
        data-testid="profileIconContainer"
      >
        <p>Login</p>
      </div>
    </div>
  )
}
