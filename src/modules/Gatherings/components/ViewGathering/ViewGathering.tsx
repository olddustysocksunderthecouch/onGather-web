import React, { Fragment, useEffect } from 'react'
import { Anchorme } from 'react-anchorme'
import { Link } from 'react-router-dom'
import { Gathering } from '../../../../common/types'
import { Routes } from '../../../../routes'
import { GuestList } from '../GuestList/GuestList'
import { SummaryDetails } from '../SummaryDetails/SummaryDetails'
import styles from './ViewGathering.module.scss'

export interface Props {
  handleUseTemplateClicked: (title: string, templateId: string) => void
  gathering: Gathering
}

export const ViewGathering: React.FunctionComponent<Props> = ({
  gathering,
  handleUseTemplateClicked,
}) => {
  useEffect(() => {
    document.title = gathering.title ? gathering.title : 'onGather'
  }, [gathering.title])

  const formattedAimsOutcomes = gathering.mainAimsOutcomes
    ? gathering.mainAimsOutcomes.join(' | ')
    : ''

  return (
    <article className={styles.viewGathering}>
      <img
        className={styles.image}
        src={gathering.imageUrls?.regular}
        alt="Template"
      />
      {gathering.title ? (
        <div className={styles.container}>
          <h3>{formattedAimsOutcomes}</h3>
          <h1>{gathering.title}</h1>
          <div className={styles.content}>
            <div className={styles.instructions}>
              <div className={styles.mobileSummaryDetails}>
                <SummaryDetails gathering={gathering} />
              </div>
              <p className={styles.personalizedDescription}>
                {gathering.personalizedDescription}
              </p>
              {gathering.whatYouDo && (
                <Fragment>
                  <h2>What we&apos;ll do</h2>
                  <p className={styles.descriptionBody}>
                    <Anchorme>{gathering.whatYouDo}</Anchorme>
                  </p>
                </Fragment>
              )}
              {gathering.howYouDo && (
                <Fragment>
                  <h2>How we&apos;ll do it</h2>
                  <p className={styles.descriptionBody}>
                    <Anchorme>{gathering.howYouDo}</Anchorme>
                  </p>
                </Fragment>
              )}
              {gathering.hostInstructions && (
                <Fragment>
                  <h2>Host Instructions</h2>
                  <p className={styles.hostInstructionsBody}>
                    <Anchorme>{gathering.hostInstructions}</Anchorme>
                  </p>
                </Fragment>
              )}
              <div className={styles.mobileGuestList}>
                <GuestList emails={gathering.inviteeEmails} />
              </div>
            </div>
            <div className={styles.tabletSummaryDetails}>
              <Link to={`${Routes.EditGathering}/${gathering.gatheringId}`}>
                <button className={styles.tabletEditGathering}>
                  Invite more guests or edit
                </button>
              </Link>
              <SummaryDetails gathering={gathering} />
              <GuestList emails={gathering.inviteeEmails} />
            </div>
          </div>
        </div>
      ) : (
        <div />
      )}
      <button className={styles.mobileEditGathering}>
        Invite more guests or edit
      </button>
    </article>
  )
}
