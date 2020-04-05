import React from 'react'
import styles from './CreateTemplate.module.scss'

export interface Props {
  dummyText: string
}

export const CreateTemplate: React.FunctionComponent<Props> = ({
  dummyText,
}) => (
  <div className={styles.container}>
    <p>{dummyText}</p>
  </div>
)
