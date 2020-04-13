import React from 'react'
import styles from './UserTemplate.module.scss'

export interface Props {
  dummyText: string
}

export const UserTemplate: React.FunctionComponent<Props> = ({ dummyText }) => (
  <div className={styles.container}>
    <p>{dummyText}</p>
  </div>
)
