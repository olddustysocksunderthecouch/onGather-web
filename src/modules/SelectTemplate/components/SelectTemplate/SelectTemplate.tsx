import React from 'react'
import styles from './SelectTemplate.module.scss'

export interface Props {
  dummyText: string
}

export const SelectTemplate: React.FunctionComponent<Props> = ({
  dummyText,
}) => (
  <div className={styles.container}>
    <p>{dummyText}</p>
  </div>
)
