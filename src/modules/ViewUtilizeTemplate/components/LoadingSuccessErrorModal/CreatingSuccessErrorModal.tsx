import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { CreateGatheringStatus } from '../../types'
import CloseIcon from './../../../../common/assets/close-icon.svg'
import styles from './CreatingSuccessErrorModal.module.scss'

export interface Props {
  createGatheringStatus: CreateGatheringStatus
  handleCloseModalClicked: () => void
}

export const CreatingSuccessErrorModal: React.FunctionComponent<Props> = ({
  createGatheringStatus,
  handleCloseModalClicked,
}) => {
  return (
    <div className={styles.loadingSuccessErrorModal}>
      <button className={styles.closeIcon} onClick={handleCloseModalClicked}>
        <img src={CloseIcon} alt="Close Icon" />
      </button>
      {createGatheringStatus === CreateGatheringStatus.Creating && (
        <div className={styles.creatingModal}>
          <h1 className={styles.modalTitle}>Creating...</h1>
          <p className={styles.creatingDescription}>
            We&apos;re sending everyone an email & adding the gathering to
            everyone&apos;s Google Calendar
          </p>
          <div className={styles.loadingBar}></div>
        </div>
      )}
      {createGatheringStatus === CreateGatheringStatus.Error && (
        <Fragment>
          <h1 className={styles.modalTitle}>Oh hot damn...</h1>
          <p className={styles.errorDescription}>
            There&apos;s been an error... please let Adrian know that
            you&apos;ve found a bug
          </p>
        </Fragment>
      )}
      {createGatheringStatus === CreateGatheringStatus.Success && (
        <Fragment>
          <h1 className={styles.modalTitle}>Great Success!</h1>
          <p className={styles.description}>
            The invitations have been sent out to everyone via email and added
            everyone&apos;s Google Calendar!
          </p>

          <Link to="/browse-activities" className={styles.continueWithButton}>
            <div className={styles.buttonText}>Browse more activities</div>
          </Link>
        </Fragment>
      )}
    </div>
  )
}
