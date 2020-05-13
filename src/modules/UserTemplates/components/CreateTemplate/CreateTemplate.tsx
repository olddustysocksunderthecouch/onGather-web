import {
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  Slider,
  TextField,
} from '@material-ui/core'
import { grey } from '@material-ui/core/colors'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import React, { Fragment } from 'react'
import { Controller, ErrorMessage, useForm } from 'react-hook-form'
import { categories, durations } from '../../../../common/constants'
import { Duration, TemplateCreation } from '../../../../common/types'
import { TemplateEditorState, ImageSearchResult } from '../../types'
import { ImagePicker } from '../ImagePicker/ImagePicker'
import { UploadImage } from '../UploadImage'
import styles from './CreateTemplate.module.scss'

export interface Props {
  loading: string | null
  error: string | null
  selectedTemplateId: string
  handleImageSelected: (url: File) => void
  handleSaveDraftClicked: (template: TemplateCreation) => void
  handlePublishClicked: (template: TemplateCreation) => void
  initialTemplateEditorData: TemplateEditorState
  imageSearchResults: ImageSearchResult[]
  handleFetchImages: (searchTerm: string, page: number) => void
  areNextImagesLoading: boolean
}

const theme = createMuiTheme({
  palette: { primary: grey },
  typography: { fontFamily: 'Raleway' },
})

const marks = [
  { value: 1, label: '1' },
  { value: 10, label: '10' },
  { value: 20, label: '20' },
]

const helperTextStyles = makeStyles(() => ({
  error: {
    '&.MuiFormHelperText-root.Mui-error': {
      fontSize: 12,
      width: '400px',
    },
  },
}))

export const CreateTemplate: React.FunctionComponent<Props> = ({
  loading,
  error,
  selectedTemplateId,
  initialTemplateEditorData,
  handleSaveDraftClicked,
  handlePublishClicked,
  handleImageSelected,
  imageSearchResults,
  handleFetchImages,
  areNextImagesLoading,
}) => {
  const { register, errors, handleSubmit, control, watch } = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    defaultValues: {
      category: initialTemplateEditorData.category,
      title: initialTemplateEditorData.title,
      shortDescription: initialTemplateEditorData.shortDescription,
      mainAimsOutcomes: initialTemplateEditorData.mainAimsOutcomes,
      suggestedDuration: initialTemplateEditorData.suggestedDuration,
      participantRange:
        initialTemplateEditorData.participantRange &&
        initialTemplateEditorData.participantRange.length > 0
          ? initialTemplateEditorData.participantRange
          : [2, 4],
      hostInstructions: initialTemplateEditorData.hostInstructions,
      whatYouDo: initialTemplateEditorData.whatYouDo,
      howYouDo: initialTemplateEditorData.howYouDo,
      imageUrl: initialTemplateEditorData.imageUrl,
    },
  })

  const watchAllFields = watch()

  const handleSaveDraftClick = (): void => {
    handleSaveDraftClicked({
      ...watchAllFields,
      templateId: selectedTemplateId,
    })
  }

  const helperTestClasses = helperTextStyles()
  const onSubmit = (): void => {
    handlePublishClicked({ ...watchAllFields, templateId: selectedTemplateId })
  }
  return (
    <Fragment>
      <div className={styles.createTemplate}>
        <header>
          <div className={styles.headerTop}>
            <h1>Template Creator</h1>
            <div className={styles.buttonContainer}>
              <button
                className={styles.saveDraft}
                onClick={handleSaveDraftClick}
              >
                Save draft
              </button>
              <input
                type="submit"
                form="createTemplateForm"
                className={styles.publish}
                value="Publish"
              />
            </div>
          </div>
          <p>
            Some text explaining some things. Sometimes it explains even more
            things about things that you’ve never heard of.
          </p>
        </header>
        {/* <DevTool control={control} /> */}

        <UploadImage handleImageSelected={handleImageSelected} />

        <ThemeProvider theme={theme}>
          <form
            id="createTemplateForm"
            className={styles.createForm}
            onSubmit={handleSubmit(onSubmit)}
          >
            <FormControl
              style={{
                width: 'calc(50% - 4px)',
                marginRight: '8px',
                marginTop: '16px',
                minWidth: '250px',
              }}
              variant="outlined"
            >
              <InputLabel>Category</InputLabel>
              <Controller
                name="category"
                as={
                  <Select label="Category" error={!!errors.category}>
                    {categories.map((category: string) => {
                      return (
                        <MenuItem key={category} value={category}>
                          {category}
                        </MenuItem>
                      )
                    })}
                  </Select>
                }
                control={control}
                rules={{
                  required: 'Please select a category',
                }}
              />
              <ErrorMessage
                className={styles.errorMessage}
                errors={errors}
                name="category"
                as="p"
              />
            </FormControl>
            <FormControl
              style={{
                width: 'calc(50% - 4px)',
                minWidth: '250px',
                marginTop: '16px',
              }}
              variant="outlined"
            >
              <InputLabel>Suggested Duration</InputLabel>
              <Controller
                name="suggestedDuration"
                as={
                  <Select
                    label="Suggested Duration"
                    error={!!errors.suggestedDuration}
                  >
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
                name="suggestedDuration"
                as="p"
              />
            </FormControl>

            <TextField
              style={{ marginTop: '16px', maxWidth: '688px' }}
              fullWidth
              FormHelperTextProps={{ classes: helperTestClasses }}
              label="Title"
              name="title"
              variant="outlined"
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
            <TextField
              style={{ marginTop: '16px' }}
              FormHelperTextProps={{ classes: helperTestClasses }}
              label="Short Description"
              name="shortDescription"
              variant="outlined"
              rows="2"
              fullWidth
              multiline
              helperText={errors?.shortDescription?.message}
              error={!!errors.shortDescription}
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

            <h2>Number of participants</h2>
            <Controller
              name="participantRange"
              control={control}
              onChange={([, value]): any => value}
              as={
                <Slider
                  style={{ marginTop: '56px' }}
                  step={1}
                  valueLabelDisplay="on"
                  aria-labelledby="discrete-slider-restrict"
                  marks={marks}
                  min={1}
                  max={20}
                />
              }
            />
            <TextField
              style={{ marginTop: '16px' }}
              FormHelperTextProps={{ classes: helperTestClasses }}
              id="outlined-basic"
              label="Main Aims & Outcomes (e.g. Community, Fun, Insightful, Exercise)"
              variant="outlined"
              fullWidth
              name="mainAimsOutcomes"
              helperText={errors?.title?.message}
              error={!!errors.title}
              inputRef={register({
                required: true,
              })}
            />
            <h2>What they&apos;ll do</h2>
            <p>
              This description will be added to the google calendar invite which
              will be sent guests
            </p>
            <TextField
              name="whatYouDo"
              style={{ marginTop: '16px' }}
              FormHelperTextProps={{ classes: helperTestClasses }}
              id="outlined-basic"
              label="Description"
              variant="outlined"
              rows="4"
              fullWidth
              multiline
              helperText={errors?.whatYouDo?.message}
              error={!!errors.title}
              inputRef={register({
                minLength: {
                  value: 6,
                  message:
                    'Add a little something here at least (min length 24 char)',
                },
              })}
            />
            <h2>How they&apos;ll do it</h2>
            <p>
              Do the need to sign up of create an account? If it&apos;s an
              online board game does some need to create an invite link
            </p>
            <TextField
              name="howYouDo"
              style={{ marginTop: '16px' }}
              id="outlined-basic"
              label="Description"
              variant="outlined"
              rows="4"
              fullWidth
              multiline
              helperText={errors?.howYouDo?.message}
              error={!!errors.title}
              inputRef={register({
                minLength: {
                  value: 6,
                  message:
                    'Add a little something here at least (min length 24 char)',
                },
              })}
            />
            <h2>Additional info for the host only</h2>
            <p>
              e.g. hosting guide, tools they could use, interaction guidelines,
              specific preparation they need to do
            </p>
            <TextField
              name="hostInstructions"
              style={{ marginTop: '16px' }}
              id="outlined-basic"
              label="Host Instructions"
              variant="outlined"
              rows="4"
              fullWidth
              multiline
              inputRef={register}
            />
          </form>
        </ThemeProvider>
        {loading && (
          <div className={styles.loading}>
            <p>{loading}</p>
          </div>
        )}
        {error && (
          <div className={styles.error}>
            <p>Error: {error}</p>
          </div>
        )}
      </div>
      {true && (
        <div className={styles.authModal}>
          <ImagePicker
            areNextImagesLoading={areNextImagesLoading}
            imageSearchResults={imageSearchResults}
            handleFetchImages={handleFetchImages}
            handleSelectedImage={(): void => undefined}
            selectedImage=""
          />
        </div>
      )}
    </Fragment>
  )
}
