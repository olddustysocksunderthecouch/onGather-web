import React from 'react'
import styles from './GuestList.module.scss'

export interface Props {
  emails: string[]
}

export const GuestList: React.FunctionComponent<Props> = ({ emails }) => {
  return (
    <div className={styles.guestList}>
      <p className={styles.overlineTitle}>Invited Guests</p>
      {emails && emails.length > 0 ? (
        <ul>
          {emails.map((email: string) => {
            return (
              <li className={styles.listItem} key={email}>
                {email}
              </li>
            )
          })}
        </ul>
      ) : (
        <p className={styles.noGuests}>No guests have been invited</p>
      )}
    </div>
  )
}
