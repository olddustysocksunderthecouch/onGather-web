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
import { Duration, Template, Gathering } from '../../../../common/types'
import { AddParticipants } from '../AddParticipants'
import { PermissionRationalModal } from '../PermissionRationalModal'
import { SendingConfirmationModal } from '../SendingConfirmationModal'
import styles from './UtilizeTemplate.module.scss'

export interface Props {
  template: Template
  handleUseTemplateClicked: () => void
  scopeIsGranted: boolean
  isAuthenticated: boolean
  handleContinueWithGoogleClicked: () => void
  handleScopeRequest: (templateEditSend: Gathering) => void
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

const event = {
  summary: 'Google I/O 2015',
  location: '800 Howard St., San Francisco, CA 94103',
  description: "A chance to hear more about Google's developer products.",
  start: {
    dateTime: '2015-05-28T09:00:00-07:00',
    timeZone: 'America/Los_Angeles',
  },
  end: {
    dateTime: '2015-05-28T17:00:00-07:00',
    timeZone: 'America/Los_Angeles',
  },
  attendees: [{ email: 'adrian.bunge@gmail.com' }],
  reminders: {
    useDefault: false,
    overrides: [
      { method: 'email', minutes: 24 * 60 },
      { method: 'popup', minutes: 10 },
    ],
  },
}

export const UtilizeTemplate: React.FunctionComponent<Props> = ({
  template,
  handleUseTemplateClicked,
  scopeIsGranted,
  isAuthenticated,
  handleScopeRequest,
  handleContinueWithGoogleClicked,
}) => {
  const {
    register,
    errors,
    handleSubmit,
    control,
    reset,
    watch,
    getValues,
  } = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  })

  useEffect(() => {
    const renderWhatYouDo = template.whatYouDo
      ? `\n\nWhat you'll do \n\n${template.whatYouDo}`
      : ''
    const renderHowYouDo = template.howYouDo
      ? `\n\nHow you'll do it \n\n${template.howYouDo}`
      : ''
    const renderHostInstructions = template.hostInstructions
      ? `\n\nHost Instructions Link: \n\n https://ongather.com/view-template/${template.templateId}`
      : ''
    const inviteDescription = template.shortDescription
      ? `${template.shortDescription}${renderWhatYouDo}${renderHowYouDo}${renderHostInstructions}`
      : ''

    reset({
      title: template.title,
      description: inviteDescription,
      duration: template.suggestedDuration,
    })
  }, [reset, template])

  const watchAllFields = watch()

  const helperTestClasses = helperTextStyles()
  const onSubmit = (): void => {
    // handlePublishClicked({
    //   ...watchAllFields,
    //   // templateId: selectedTemplateId,
    //   // imageUrls: selectedImages,
    // })
  }
  const [date, setDate] = useState(new Date())
  const [time, setTime] = useState(new Date())

  const handleEmailsEntered = (emailEntered: string[]) => {
    console.log('emailEntered', emailEntered)
  }

  const handleScopeRequestClicked = (): void => {
    handleScopeRequest({
      ...watchAllFields,
      templateId: template.templateId,
      organizerUid: 'some uid',
      organizerEmail: '',
      inviteeEmails: [''],
      startTimestamp: new Date(),
      duration: '',
      videoCallProvider: '',
      videoCallUrl: '',
      category: '',
      createdTimestamp: new Date(),
    } as any)
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
            handleContinueWithClicked={(): void => undefined}
            handleAuthModalClose={(): void => setConfirmModalIsVisible(false)}
          />
        </div>
      )}
      <div className={styles.content}>
        <header>
          <div className={styles.headerTop}>
            <h1>Edit & Send Invites</h1>
            <div className={styles.buttonContainer}>
              <input
                type="submit"
                form="createTemplateForm"
                className={styles.publish}
                value="Publish"
              />
            </div>
          </div>
          <p>
            Hey! Now that you&apos;re here, describe something that others could
            do on a video call.
          </p>
        </header>
        <DevTool control={control} />
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <ThemeProvider theme={theme}>
            <form
              id="createTemplateForm"
              className={styles.createForm}
              onSubmit={handleSubmit(onSubmit)}
            >
              <TextField
                style={{ marginTop: '16px', maxWidth: '688px' }}
                fullWidth
                FormHelperTextProps={{ classes: helperTestClasses }}
                label="Title"
                name="title"
                variant="outlined"
                InputLabelProps={{ shrink: getValues('title') }}
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
                value={date}
                onChange={(selectedDate: any): void =>
                  setDate(new Date(selectedDate))
                }
              />
              <div className={styles.timeContainer}>
                <TimePicker
                  disableToolbar
                  variant="inline"
                  label="Start Time"
                  minutesStep={5}
                  ampm={false}
                  inputVariant="outlined"
                  value={time}
                  onChange={(selectedDate: any): void =>
                    setTime(new Date(selectedDate))
                  }
                />
                <FormControl
                  style={{
                    width: 'calc(50% - 4px)',
                    // minWidth: '250px',
                    // marginTop: '16px',
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
              <AddParticipants
                handleEmailsEntered={(emailEntered): void =>
                  console.log('emailEntered', emailEntered)
                }
              />

              <TextField
                style={{ marginTop: '16px' }}
                FormHelperTextProps={{ classes: helperTestClasses }}
                label="Description"
                name="description"
                variant="outlined"
                fullWidth
                multiline
                InputLabelProps={{ shrink: getValues('description') }}
                helperText={errors?.description?.message}
                error={!!errors.description}
                inputRef={register({
                  required: 'Please add a short description',
                  minLength: {
                    value: 20,
                    message:
                      'Add a bit more to your description (min length 20 char)',
                  },
                  maxLength: {
                    value: 187,
                    message:
                      'Please shorten your description (max length 187 char)',
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
