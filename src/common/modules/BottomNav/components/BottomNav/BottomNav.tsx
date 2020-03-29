import classes from 'classnames'
import React from 'react'
import { NavigationItem } from '../../types'
import styles from './BottomNav.module.scss'

export interface Props {
  handleNavigationItemClicked: (navigationItemClicked: NavigationItem) => void
  selectedNavigationItem: NavigationItem
}

export const BottomNav: React.FunctionComponent<Props> = ({
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
          styles.iconContainer,
          iconStyle(NavigationItem.Search),
        )}
        onClick={(): void => handleNavigationItemClicked(NavigationItem.Search)}
        data-testid="searchIconContainer"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M15.9 14.5001L12.6 11.2001C13.5189 9.99379 14.0113 8.51654 14 7.00013C14.0057 6.07929 13.8286 5.16647 13.4788 4.31461C13.129 3.46275 12.6136 2.68881 11.9625 2.03766C11.3113 1.38651 10.5374 0.871109 9.68554 0.521348C8.83368 0.171587 7.92086 -0.00557568 7.00001 0.000133728C6.07916 -0.00557568 5.16634 0.171587 4.31449 0.521348C3.46263 0.871109 2.68869 1.38651 2.03754 2.03766C1.38639 2.68881 0.870987 3.46275 0.521226 4.31461C0.171465 5.16647 -0.00569775 6.07929 1.16581e-05 7.00013C-0.00569775 7.92098 0.171465 8.8338 0.521226 9.68566C0.870987 10.5375 1.38639 11.3115 2.03754 11.9626C2.68869 12.6138 3.46263 13.1292 4.31449 13.4789C5.16634 13.8287 6.07916 14.0058 7.00001 14.0001C8.51642 14.0114 9.99367 13.519 11.2 12.6001L14.5 15.9001L15.9 14.5001ZM2.00001 7.00013C1.99346 6.3417 2.11832 5.68858 2.36727 5.07899C2.61623 4.46941 2.98428 3.91561 3.44988 3.45C3.91548 2.9844 4.46929 2.61635 5.07887 2.3674C5.68846 2.11844 6.34158 1.99358 7.00001 2.00013C7.65844 1.99358 8.31156 2.11844 8.92115 2.3674C9.53074 2.61635 10.0845 2.9844 10.5501 3.45C11.0157 3.91561 11.3838 4.46941 11.6328 5.07899C11.8817 5.68858 12.0066 6.3417 12 7.00013C12.0066 7.65856 11.8817 8.31169 11.6328 8.92127C11.3838 9.53086 11.0157 10.0847 10.5501 10.5503C10.0845 11.0159 9.53074 11.3839 8.92115 11.6329C8.31156 11.8818 7.65844 12.0067 7.00001 12.0001C6.34158 12.0067 5.68846 11.8818 5.07887 11.6329C4.46929 11.3839 3.91548 11.0159 3.44988 10.5503C2.98428 10.0847 2.61623 9.53086 2.36727 8.92127C2.11832 8.31169 1.99346 7.65856 2.00001 7.00013V7.00013Z" />
        </svg>
      </div>
      <div
        className={classes(
          styles.iconContainer,
          iconStyle(NavigationItem.Profile),
        )}
        onClick={(): void =>
          handleNavigationItemClicked(NavigationItem.Profile)
        }
        data-testid="profileIconContainer"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M0 16V14C0 11.8 3.6 10 8 10C12.4 10 16 11.8 16 14V16H0ZM4 4C4 3.20888 4.2346 2.43552 4.67412 1.77772C5.11365 1.11992 5.73836 0.607234 6.46927 0.304484C7.20017 0.00173312 8.00444 -0.0774802 8.78036 0.0768607C9.55629 0.231202 10.269 0.612165 10.8284 1.17157C11.3878 1.73098 11.7688 2.44372 11.9231 3.21964C12.0775 3.99556 11.9983 4.79983 11.6955 5.53074C11.3928 6.26164 10.8801 6.88635 10.2223 7.32588C9.56448 7.76541 8.79113 8 8 8C6.93913 8 5.92172 7.57857 5.17157 6.82843C4.42143 6.07828 4 5.06087 4 4V4Z" />
        </svg>
      </div>
    </div>
  )
}
