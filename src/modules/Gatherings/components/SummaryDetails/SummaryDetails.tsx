import React from 'react'
import { Gathering } from '../../../../common/types'
import { timeFormatted, weekdayDayMonthFormatted } from '../../Gatherings.utils'
import styles from './SummaryDetails.module.scss'

export interface Props {
  gathering: Gathering
}

export const SummaryDetails: React.FunctionComponent<Props> = ({
  gathering,
}) => {
  return (
    <div className={styles.summaryDetails}>
      <p className={styles.overlineTitle}>Date & Time</p>
      <div className={styles.dateAndTime}>
        <p className={styles.boldBody}>
          {weekdayDayMonthFormatted(
            new Date(gathering.startTimestamp),
            gathering.timeZone,
          )}
        </p>
        <p className={styles.boldBody}>
          {timeFormatted(
            new Date(gathering.startTimestamp),
            gathering.duration,
            gathering.timeZone,
          )}
        </p>
        <p className={styles.regularBody}>({gathering.timeZone})</p>
      </div>
      <p className={styles.overlineTitle}>Video call link</p>
      <a className={styles.regularBody} href={gathering.callUrl}>
        {gathering.callUrl}
      </a>
      <p className={styles.overlineTitle}>Hosted By</p>
      <span className={styles.regularBody}>{gathering.organizerName}</span>
    </div>
  )
}
