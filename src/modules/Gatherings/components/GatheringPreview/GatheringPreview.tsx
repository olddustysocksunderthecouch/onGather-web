import React from 'react'
import { Link } from 'react-router-dom'
import { Gathering } from '../../../../common/types'
import { dateTimeFormatted } from '../../Gatherings.utils'
import styles from './GatheringPreview.module.scss'
import { Routes } from '../../../../routes'

export interface Props {
  gathering: Gathering
  handleGatheringPreviewClicked: (gatheringId: string) => void
}

export const GatheringPreview: React.FunctionComponent<Props> = ({
  gathering,
  handleGatheringPreviewClicked,
}) => {
  const formattedDateTime = dateTimeFormatted(
    new Date(gathering.startTimestamp),
    gathering.timeZone,
  )

  const formattedAimsOutcomes = gathering.mainAimsOutcomes
    ? gathering.mainAimsOutcomes.join(' | ')
    : ''

  return (
    <article className={styles.templatePreview}>
      <Link
        // onClick={(): void =>
        //   handleGatheringPreviewClicked(gathering.gatheringId!)
        // }
        target={'_self'}
        to={`${Routes.ViewGathering}/${gathering.gatheringId}`}
        className={styles.link}
      >
        <img
          className={styles.image}
          src={gathering.imageUrls?.regular}
          alt="Gathering"
        />

        <div className={styles.content}>
          <h5>{formattedDateTime}</h5>
          <h4>{gathering.title}</h4>
          <h6>{formattedAimsOutcomes}</h6>
          <div className={styles.spacer} />
        </div>
        <button className={styles.viewGathering}>View Gathering</button>
      </Link>
    </article>
  )
}
