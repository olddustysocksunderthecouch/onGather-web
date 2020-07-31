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
import {
  Duration,
  Gathering,
  GatheringDraft,
  Template,
} from '../../../../common/types'
import { mergeDateAndTime } from '../../../../common/utils'
import { CreateGatheringStatus } from '../../types'
import { AddParticipants } from '../AddParticipants'
import { CreatingSuccessErrorModal } from '../LoadingSuccessErrorModal/CreatingSuccessErrorModal'
import { PermissionRationalModal } from '../PermissionRationalModal'
import { SendingConfirmationModal } from '../SendingConfirmationModal'
import styles from './UtilizeTemplate.module.scss'

export interface Props {
  gatheringDraft: GatheringDraft
  template: Template
  fromState: boolean
  scopeIsGranted: boolean
  isAuthenticated: boolean
  createGatheringStatus: CreateGatheringStatus
  handleContinueWithGoogleClicked: () => void
  handleScopeRequest: (gathering: GatheringDraft) => void
  handleSendGatheringInvite: (gathering: Gathering) => void
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

export const UtilizeTemplate: React.FunctionComponent<Props> = ({
  template,
  fromState,
  gatheringDraft,
  scopeIsGranted,
  isAuthenticated,
  createGatheringStatus,
  handleScopeRequest,
  handleContinueWithGoogleClicked,
  handleSendGatheringInvite,
}) => {
  const [authModalIsVisible, setAuthModalVisible] = useState(false)
  const [confirmModalIsVisible, setConfirmModalIsVisible] = useState(false)

  const { register, errors, control, reset, watch } = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  })

  useEffect(() => {
    if (fromState) {
      reset({
        title: gatheringDraft.title,
        date: new Date(gatheringDraft.startTimestamp),
        time: new Date(gatheringDraft.startTimestamp),
        duration: gatheringDraft.duration,
        inviteeEmails: gatheringDraft.inviteeEmails,
        whatYouDo: gatheringDraft.whatYouDo,
        howYouDo: gatheringDraft.howYouDo,
        personalizedDescription: gatheringDraft.personalizedDescription,
      })
      setConfirmModalIsVisible(true)
    } else {
      reset({
        title: template.title,
        date: new Date(),
        time: new Date(),
        duration: template.suggestedDuration,
        whatYouDo: template.whatYouDo,
        howYouDo: template.howYouDo,
        personalizedDescription: template.personalizedDescription,
      })
    }
  }, [reset, template, fromState])

  const watchAllFields = watch()
  const helperTestClasses = helperTextStyles()

  const handleScopeRequestClicked = (): void => {
    handleScopeRequest({
      templateId: template.templateId,
      title: watchAllFields.title,
      personalizedDescription: watchAllFields.personalizedDescription,
      whatYouDo: watchAllFields.whatYouDo,
      howYouDo: watchAllFields.howYouDo,
      inviteeEmails: watchAllFields.inviteeEmails,
      startTimestamp: mergeDateAndTime(
        watchAllFields.date,
        watchAllFields.time,
      ).toISOString(),
      duration: watchAllFields.duration,
      callProvider: '',
      callUrl: '',
    })
  }
  const handleSendGatheringInviteClicked = (): void => {
    handleSendGatheringInvite({
      templateId: template.templateId,
      title: watchAllFields.title,
      personalizedDescription: watchAllFields.personalizedDescription,
      whatYouDo: watchAllFields.whatYouDo,
      howYouDo: watchAllFields.howYouDo,
      inviteeEmails: watchAllFields.inviteeEmails,
      startTimestamp: mergeDateAndTime(
        watchAllFields.date,
        watchAllFields.time,
      ).toISOString(),
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      duration: watchAllFields.duration,
      callProvider: '',
      callUrl: '',
      imageUrls: template.imageUrls,
      hostInstructions: template.hostInstructions,
    })
  }

  useEffect(() => {
    setAuthModalVisible(false)
  }, [isAuthenticated])

  const [
    permissionRationalModalVisible,
    setPermissionRationalModalVisible,
  ] = useState(false)
  const handleSendButtonClicked = (): void => {
    scopeIsGranted
      ? setConfirmModalIsVisible(true)
      : setPermissionRationalModalVisible(true)
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
      {permissionRationalModalVisible && (
        <div className={styles.modal}>
          <PermissionRationalModal
            handleScopeRequestClicked={handleScopeRequestClicked}
            handleCloseModalClicked={(): void =>
              setPermissionRationalModalVisible(false)
            }
          />
        </div>
      )}
      {confirmModalIsVisible && (
        <div className={styles.modal}>
          <SendingConfirmationModal
            handleContinueWithClicked={(): void => {
              setLoadingSuccessErrorModalIsVisible(true)
              setConfirmModalIsVisible(false)
              return handleSendGatheringInviteClicked()
            }}
            handleCloseModalClicked={(): void =>
              setConfirmModalIsVisible(false)
            }
            inviteeEmails={watchAllFields.inviteeEmails}
          />
        </div>
      )}
      {loadingSuccessErrorModalIsVisible && (
        <div className={styles.modal}>
          <CreatingSuccessErrorModal
            createGatheringStatus={createGatheringStatus}
            handleCloseModalClicked={(): void =>
              setLoadingSuccessErrorModalIsVisible(false)
            }
          />
        </div>
      )}
      <div className={styles.content}>
        <header>
          <div className={styles.headerTop}>
            <h1>Edit & Send Invites</h1>
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
            <form id="utilizeTemplateForm" className={styles.createForm}>
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
                    defaultValue={
                      fromState ? gatheringDraft.inviteeEmails : undefined
                    }
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
            onClick={handleSendButtonClicked}
          >
            Send Email & Calendar Invitations
          </button>
        )}
      </div>
    </div>
  )
}
