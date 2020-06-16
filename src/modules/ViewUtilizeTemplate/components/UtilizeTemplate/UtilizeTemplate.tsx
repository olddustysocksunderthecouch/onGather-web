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
import { AuthModal } from '../../../../common/components/AuthModal'
import { durations } from '../../../../common/constants'
import {
  Duration,
  Gathering,
  GatheringDraft,
  Template,
} from '../../../../common/types'
import { mergeDateAndTime } from '../../../../common/utils'
import { AddParticipants } from '../AddParticipants'
import { PermissionRationalModal } from '../PermissionRationalModal'
import { SendingConfirmationModal } from '../SendingConfirmationModal'
import styles from './UtilizeTemplate.module.scss'

export interface Props {
  gatheringDraft: GatheringDraft
  template: Template
  fromState: boolean
  scopeIsGranted: boolean
  isAuthenticated: boolean
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
  handleScopeRequest,
  handleContinueWithGoogleClicked,
  handleSendGatheringInvite,
}) => {
  const { register, errors, control, reset, watch } = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  })

  useEffect(() => {
    if (fromState) {
      reset({
        title: gatheringDraft.title,
        whatYouDo: gatheringDraft.whatYouDo,
        howYouDo: gatheringDraft.howYouDo,
        duration: gatheringDraft.duration,
        personalizedDescription: gatheringDraft.personalizedDescription,
      })
    } else {
      reset({
        title: template.title,
        whatYouDo: template.whatYouDo,
        howYouDo: template.howYouDo,
        duration: template.suggestedDuration,
        personalizedDescription: template.personalizedDescription,
      })
    }
  }, [reset, template, fromState])

  const watchAllFields = watch()

  const helperTestClasses = helperTextStyles()

  const [dateSelected, setDateSelected] = useState(new Date())
  const [timeSelected, setTimeSelected] = useState(new Date())

  const handleScopeRequestClicked = (): void => {
    handleScopeRequest({
      templateId: template.templateId,
      title: watchAllFields.title,
      personalizedDescription: watchAllFields.personalizedDescription,
      whatYouDo: watchAllFields.whatYouDo,
      howYouDo: watchAllFields.howYouDo,
      inviteeEmails: watchAllFields.inviteeEmails,
      startTimestamp: mergeDateAndTime(
        dateSelected,
        timeSelected,
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
        dateSelected,
        timeSelected,
      ).toISOString(),
      duration: watchAllFields.duration,
      callProvider: '',
      callUrl: '',
      imageUrls: template.imageUrls,
      hostInstructions: template.hostInstructions,
    })
  }

  const [authModalIsVisible, setAuthModalVisible] = useState(false)

  useEffect(() => {
    setAuthModalVisible(false)
  }, [isAuthenticated])

  const [confirmModalIsVisible, setConfirmModalIsVisible] = useState(false)
  const [
    permissionRationalModalVisible,
    setPermissionRationalModalVisible,
  ] = useState(false)
  const handleSendButtonClicked = (): void => {
    scopeIsGranted
      ? setConfirmModalIsVisible(true)
      : setPermissionRationalModalVisible(true)
  }

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
            handleAuthModalClose={(): void =>
              setPermissionRationalModalVisible(false)
            }
          />
        </div>
      )}
      {confirmModalIsVisible && (
        <div className={styles.modal}>
          <SendingConfirmationModal
            handleContinueWithClicked={handleSendGatheringInviteClicked}
            handleAuthModalClose={(): void => setConfirmModalIsVisible(false)}
          />
        </div>
      )}
      <div className={styles.content}>
        <header>
          <div className={styles.headerTop}>
            <h1>Edit & Send Invites</h1>
          </div>
          <p>
            Hey! Now that you&apos;re here, describe something that others could
            do on a video call.
          </p>
        </header>
        {/* <DevTool control={control} /> */}
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
              <DatePicker
                style={{
                  marginTop: '16px',
                }}
                disableToolbar
                variant="inline"
                label="Date"
                inputVariant="outlined"
                value={dateSelected}
                onChange={(selectedDate: any): void =>
                  setDateSelected(new Date(selectedDate))
                }
              />
              <div className={styles.timeContainer}>
                <TimePicker
                  style={{
                    width: 'calc(50% - 4px)',
                    minWidth: '250px',
                    marginRight: '8px',
                  }}
                  disableToolbar
                  variant="inline"
                  label="Start Time"
                  minutesStep={5}
                  ampm={false}
                  inputVariant="outlined"
                  value={timeSelected}
                  onChange={(selectedDate: any): void =>
                    setTimeSelected(new Date(selectedDate))
                  }
                />
                <FormControl
                  style={{
                    width: 'calc(50% - 4px)',
                    minWidth: '250px',
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
                label="What you'll do"
                InputLabelProps={{ shrink: true }}
                placeholder="e.g. Play a friendly chess match and see how comes out on top on chess.com"
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
                label="How you'll do it"
                variant="outlined"
                rows="4"
                rowsMax="14"
                fullWidth
                multiline
                placeholder="e.g. 1) You'll need to create an account on chess.com 2) Just before the game, one of you will need to go to the following link..."
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
            className={styles.useThisTemplateButton}
            onClick={(): void => setAuthModalVisible(true)}
          >
            Sign up/in
          </button>
        )}
        {isAuthenticated && (
          <button
            className={styles.useThisTemplateButton}
            onClick={handleSendButtonClicked}
          >
            Send Invitations
          </button>
        )}
      </div>
    </div>
  )
}
