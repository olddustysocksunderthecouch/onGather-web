import DateFnsUtils from '@date-io/date-fns'
import {
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  TextField,
} from '@material-ui/core'
import { grey } from '@material-ui/core/colors'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import {
  DatePicker,
  MuiPickersUtilsProvider,
  TimePicker,
} from '@material-ui/pickers'
import React, { useEffect, useState } from 'react'
import { Controller, ErrorMessage, useForm } from 'react-hook-form'
import { DevTool } from 'react-hook-form-devtools'
import { AuthModal } from '../../../../common/components/AuthModal'
import { durations } from '../../../../common/constants'
import { Duration, Gathering } from '../../../../common/types'
import { mergeDateAndTime } from '../../../../common/utils'
import { AddParticipants } from '../../../ViewUtilizeTemplate/components/AddParticipants'
import { CreatingSuccessErrorModal } from '../../../ViewUtilizeTemplate/components/LoadingSuccessErrorModal/CreatingSuccessErrorModal'
import { UpdateGatheringStatus } from '../../types'
import styles from './EditGathering.module.scss'
import { UpdateConfirmationModal } from '../UpdateConfirmationModal/UpdateConfirmationModal'
import { UpdatingSuccessErrorModal } from '../UpdatingSuccessErrorModal'

export interface Props {
  gathering: Gathering
  scopeIsGranted: boolean
  isAuthenticated: boolean
  updateGatheringStatus: UpdateGatheringStatus
  handleContinueWithGoogleClicked: () => void
  handleUpdateGathering: (gathering: Gathering) => void
}

const theme = createMuiTheme({
  palette: { primary: grey },
  typography: { fontFamily: 'Raleway' },
})

const helperTextStyles = makeStyles(() => ({
  error: {
    '&.MuiFormHelperText-root.Mui-error': {
      fontSize: 12,
      width: '400px',
    },
  },
}))

export const EditGathering: React.FunctionComponent<Props> = ({
  gathering,
  scopeIsGranted,
  isAuthenticated,
  updateGatheringStatus,
  handleContinueWithGoogleClicked,
  handleUpdateGathering,
}) => {
  const [authModalIsVisible, setAuthModalVisible] = useState(false)
  const [confirmModalIsVisible, setConfirmModalIsVisible] = useState(false)

  const { register, errors, control, reset, watch } = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  })

  console.log('updateGatheringStatus', updateGatheringStatus)

  useEffect(() => {
    reset({
      title: gathering.title,
      date: new Date(gathering.startTimestamp),
      time: new Date(gathering.startTimestamp),
      duration: gathering.duration,
      whatYouDo: gathering.whatYouDo,
      howYouDo: gathering.howYouDo,
      personalizedDescription: gathering.personalizedDescription,
      inviteeEmails: gathering.inviteeEmails,
    })

    // eslint-disable-next-line
  }, [reset, gathering])

  const watchAllFields = watch()
  const helperTestClasses = helperTextStyles()

  const handleUpdateInvitations = (): void => {
    handleUpdateGathering({
      gatheringId: gathering.gatheringId,
      templateId: gathering.templateId,
      title: watchAllFields.title,
      personalizedDescription: watchAllFields.personalizedDescription,
      whatYouDo: watchAllFields.whatYouDo,
      howYouDo: watchAllFields.howYouDo,
      mainAimsOutcomes: gathering.mainAimsOutcomes,
      inviteeEmails: watchAllFields.inviteeEmails,
      startTimestamp: mergeDateAndTime(
        watchAllFields.date,
        watchAllFields.time,
      ).getTime(),
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      duration: watchAllFields.duration,
      callProvider: gathering.callProvider,
      callUrl: gathering.callUrl,
      imageUrls: gathering.imageUrls,
      googleCalendarId: gathering.googleCalendarId,
      hostInstructions: gathering.hostInstructions,
    })
  }

  useEffect(() => {
    setAuthModalVisible(false)
  }, [isAuthenticated])

  const showConfirmationModal = (): void => {
    if (scopeIsGranted) {
      setConfirmModalIsVisible(true)
    }
  }

  const [
    loadingSuccessErrorModalIsVisible,
    setLoadingSuccessErrorModalIsVisible,
  ] = useState(false)

  return (
    <div className={styles.utilizeTemplate}>
      {authModalIsVisible && (
        <div className={styles.modal}>
          <AuthModal
            handleContinueWithClicked={handleContinueWithGoogleClicked}
            handleAuthModalClose={(): void => setAuthModalVisible(false)}
          />
        </div>
      )}

      {confirmModalIsVisible && (
        <div className={styles.modal}>
          <UpdateConfirmationModal
            handleSendUpdateClicked={(): void => {
              setLoadingSuccessErrorModalIsVisible(true)
              setConfirmModalIsVisible(false)
              return handleUpdateInvitations()
            }}
            handleCloseModalClicked={(): void =>
              setConfirmModalIsVisible(false)
            }
          />
        </div>
      )}
      {loadingSuccessErrorModalIsVisible && (
        <div className={styles.modal}>
          <UpdatingSuccessErrorModal
            updateGatheringStatus={updateGatheringStatus}
            handleCloseModalClicked={(): void =>
              setLoadingSuccessErrorModalIsVisible(false)
            }
          />
        </div>
      )}
      <div className={styles.content}>
        <header>
          <div className={styles.headerTop}>
            <h1>Edit Your Gathering</h1>
          </div>
          <p>
            Select a date, time and add a few of your friend&apos;s emails and
            we&apos;ll send everyone a calendar invite and email with all the
            details.
          </p>
        </header>
        <DevTool control={control} />
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <ThemeProvider theme={theme}>
            <form id="utilizeTemplateForm" className={styles.editGatheringForm}>
              <TextField
                style={{ marginTop: '16px', maxWidth: '688px' }}
                fullWidth
                FormHelperTextProps={{ classes: helperTestClasses }}
                label="Title"
                name="title"
                variant="outlined"
                InputLabelProps={{ shrink: true }}
                helperText={errors?.title?.message}
                error={!!errors.title}
                inputRef={register({
                  required:
                    'A title must be as descriptive as possible (min length 6 char)',
                  minLength: {
                    value: 6,
                    message:
                      'A title must be as descriptive as possible (min length 6 char)',
                  },
                })}
              />
              <Controller
                name="date"
                as={
                  <DatePicker
                    onChange={(value): any => value}
                    value={(value: any): any => value}
                    style={{
                      marginTop: '16px',
                    }}
                    autoOk
                    variant="inline"
                    label="Date"
                    inputVariant="outlined"
                  />
                }
                rules={{ required: 'Please a date' }}
                control={control}
              />
              <div className={styles.timeContainer}>
                <Controller
                  name="time"
                  as={
                    <TimePicker
                      style={{
                        width: 'calc(50% - 4px)',
                        minWidth: '250px',
                        marginRight: '8px',
                        marginTop: '16px',
                      }}
                      autoOk
                      variant="inline"
                      label="Start Time"
                      minutesStep={5}
                      ampm={false}
                      inputVariant="outlined"
                      onChange={(value): any => value}
                      value={(value: any): any => value}
                    />
                  }
                  rules={{ required: 'Please a date' }}
                  control={control}
                />
                <FormControl
                  style={{
                    width: 'calc(50% - 4px)',
                    minWidth: '250px',
                    marginTop: '16px',
                  }}
                  variant="outlined"
                >
                  <InputLabel>Duration</InputLabel>
                  <Controller
                    name="duration"
                    defaultValue=""
                    as={
                      <Select label="Duration" error={!!errors.duration}>
                        {durations.map((duration: Duration) => {
                          return (
                            <MenuItem
                              key={duration.timeMinutes}
                              value={duration.timeMinutes}
                            >
                              {duration.timeFormatted}
                            </MenuItem>
                          )
                        })}
                      </Select>
                    }
                    rules={{ required: 'Please select a duration' }}
                    control={control}
                  />
                  <ErrorMessage
                    className={styles.errorMessage}
                    errors={errors}
                    name="duration"
                    as="p"
                  />
                </FormControl>
              </div>

              <Controller
                name="inviteeEmails"
                as={
                  <AddParticipants
                    onChange={(value): any => value}
                    defaultValue={gathering.inviteeEmails}
                    error={!!errors.attendeeEmails}
                  />
                }
                rules={{
                  validate: (value): boolean | string =>
                    value.length > 1 || 'error',
                }}
                control={control}
              />
              <h2>Invitation Description</h2>
              <TextField
                style={{ marginTop: '16px' }}
                FormHelperTextProps={{ classes: helperTestClasses }}
                label="Personalized message"
                placeholder="E.g. Hey! Would you like to play some online chess... "
                name="personalizedDescription"
                variant="outlined"
                rows="2"
                rowsMax="6"
                fullWidth
                multiline
                InputLabelProps={{ shrink: true }}
                helperText={errors?.personalizedDescription?.message}
                error={!!errors.personalizedDescription}
                inputRef={register({
                  required:
                    'Add the personal touch that every invitation needs',
                  minLength: {
                    value: 20,
                    message:
                      'Add a bit more to your description (min length 20 char)',
                  },
                })}
              />
              <TextField
                name="whatYouDo"
                style={{ marginTop: '16px' }}
                FormHelperTextProps={{ classes: helperTestClasses }}
                label="What we'll do"
                InputLabelProps={{ shrink: true }}
                placeholder="e.g. Let's play a friendly chess match and see how comes out on top."
                variant="outlined"
                rows="4"
                rowsMax="14"
                fullWidth
                multiline
                helperText={errors?.whatYouDo?.message}
                error={!!errors.whatYouDo}
                inputRef={register({
                  required: 'Add a little more info here',
                  minLength: {
                    value: 6,
                    message:
                      'Add a little something here at least (min length 24 char)',
                  },
                })}
              />
              <TextField
                name="howYouDo"
                style={{ marginTop: '16px' }}
                label="How we'll do it"
                variant="outlined"
                rows="4"
                rowsMax="14"
                fullWidth
                multiline
                placeholder="e.g. 1) You'll need to create an account on chess.com 2) Just before the game, one of us will need to create a game..."
                InputLabelProps={{ shrink: true }}
                helperText={errors?.howYouDo?.message}
                error={!!errors.howYouDo}
                inputRef={register({
                  minLength: {
                    value: 6,
                    message:
                      'Add a little something here at least (min length 24 char)',
                  },
                })}
              />
            </form>
          </ThemeProvider>
        </MuiPickersUtilsProvider>
        {!isAuthenticated && (
          <button
            className={styles.signInSendButton}
            onClick={(): void => setAuthModalVisible(true)}
          >
            Sign up/in
          </button>
        )}
        {isAuthenticated && (
          <button
            className={styles.signInSendButton}
            onClick={showConfirmationModal}
          >
            Update Invitations
          </button>
        )}
      </div>
    </div>
  )
}
