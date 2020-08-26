import React, { Fragment, useEffect, useState } from 'react'
import { Anchorme } from 'react-anchorme'
import { Link } from 'react-router-dom'
import { Gathering } from '../../../../common/types'
import { Routes } from '../../../../routes'
import { GuestList } from '../GuestList/GuestList'
import { ShareInvite } from '../ShareInvite'
import { SummaryDetails } from '../SummaryDetails/SummaryDetails'
import styles from './ViewGathering.module.scss'
import { UpdateGuestsConfirmationModal } from '../UpdateGuestsConfirmationModal'

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

  const [shareInviteIsVisible, setShareInviteIsVisible] = useState(false)
  const [
    updateGuestConfirmationVisible,
    setUpdateGuestConfirmationVisible,
  ] = useState(false)

  const [newInviteeEmails, setNewInviteeEmails] = useState([''])

  const handleUpdateGuests = (newGuestEmails: string[]): void => {
    setNewInviteeEmails(newGuestEmails)
    setUpdateGuestConfirmationVisible(true)
  }

  return (
    <div className={styles.parent}>
      {updateGuestConfirmationVisible && (
        <div className={styles.modal} style={{ zIndex: 1000 }}>
          <UpdateGuestsConfirmationModal
            handleSendUpdates={(): void => undefined}
            handleCloseModalClicked={(): void =>
              setUpdateGuestConfirmationVisible(false)
            }
            currentInviteeEmails={gathering.inviteeEmails}
            newInviteeEmails={newInviteeEmails}
          />
        </div>
      )}
      {shareInviteIsVisible && (
        <div className={styles.modal}>
          <ShareInvite
            invitedGuestEmails={gathering.inviteeEmails}
            handleUpdateInvitees={handleUpdateGuests}
            handleCloseModalClicked={(): void => setShareInviteIsVisible(false)}
            onChange={(): void => undefined}
          />
        </div>
      )}
      <article className={styles.viewGathering}>
        <img
          className={styles.image}
          src={gathering.imageUrls?.regular}
          alt="Template"
        />

        {gathering.title ? (
          <div className={styles.container}>
            <div className={styles.header}>
              <h3>{formattedAimsOutcomes}</h3>
              <h1>{gathering.title}</h1>
            </div>
            <div className={styles.content}>
              <div className={styles.instructions}>
                <div className={styles.mobileSummaryDetails}>
                  <SummaryDetails gathering={gathering} />
                  <GuestList emails={gathering.inviteeEmails} />
                </div>
                {gathering.personalizedDescription && (
                  <Fragment>
                    <h2 className={styles.sectionTitlePersonal}>
                      Personal Message
                    </h2>
                    <p className={styles.personalizedDescription}>
                      {gathering.personalizedDescription}
                    </p>
                  </Fragment>
                )}

                {gathering.whatYouDo && (
                  <Fragment>
                    <h2 className={styles.sectionTitle}>What we&apos;ll do</h2>
                    <p className={styles.descriptionBody}>
                      <Anchorme>{gathering.whatYouDo}</Anchorme>
                    </p>
                  </Fragment>
                )}
                {gathering.howYouDo && (
                  <Fragment>
                    <h2 className={styles.sectionTitle}>
                      How we&apos;ll do it
                    </h2>
                    <p className={styles.descriptionBody}>
                      <Anchorme>{gathering.howYouDo}</Anchorme>
                    </p>
                  </Fragment>
                )}
                {gathering.hostInstructions && (
                  <Fragment>
                    <h2 className={styles.sectionTitle}>Host Instructions</h2>
                    <p className={styles.hostInstructionsBody}>
                      <Anchorme>{gathering.hostInstructions}</Anchorme>
                    </p>
                  </Fragment>
                )}
              </div>
              <div className={styles.tabletSummaryDetails}>
                <button
                  className={styles.tabletShareGathering}
                  onClick={(): void => setShareInviteIsVisible(true)}
                >
                  Invite / Sharing
                </button>
                <Link to={`${Routes.EditGathering}/${gathering.gatheringId}`}>
                  <button className={styles.tabletEditGathering}>
                    Edit Gathering
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
    </div>
  )
}
