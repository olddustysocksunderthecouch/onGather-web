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
import { durations } from '../../../../common/constants'
import { Duration, Template } from '../../../../common/types'
import styles from './UtilizeTemplate.module.scss'

export interface Props {
  template: Template
  // handlePublishClicked: (template: Template) => void
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
  // handlePublishClicked,
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
      hostInstructions: template.hostInstructions,
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

  return (
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
                // minWidth: '250px',
                // marginTop: '16px',
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
    </div>
  )
}
