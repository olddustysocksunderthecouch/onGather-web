import React from 'react'
import { TemplateFirestoreResult } from '../../../../common/types'
import styles from './UseTemplate.module.scss'

export interface Props {
  template: TemplateFirestoreResult
}

export const UseTemplate: React.FunctionComponent<Props> = ({ template }) => (
  <article className={styles.templatePreview}></article>
)
