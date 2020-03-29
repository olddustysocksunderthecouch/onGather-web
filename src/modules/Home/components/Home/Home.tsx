import React from 'react'
import styles from './Home.module.scss'

export interface Props {
  dummyText: string
}

export const Home: React.FunctionComponent<Props> = ({ dummyText }) => (
  <div className={styles.container}>
    <p>{dummyText}</p>
  </div>
)
