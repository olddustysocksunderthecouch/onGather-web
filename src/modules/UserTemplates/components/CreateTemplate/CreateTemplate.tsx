import {
  Chip,
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  Slider,
  TextField,
} from '@material-ui/core'
import Checkbox from '@material-ui/core/Checkbox'
import { grey, orange } from '@material-ui/core/colors'
import ListItemText from '@material-ui/core/ListItemText'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import React, { Fragment, useState } from 'react'
import { Controller, ErrorMessage, useForm } from 'react-hook-form'
import {
  callProviders,
  categories,
  durations,
} from '../../../../common/constants'
import { Duration, ImageUrls, TemplateCreation } from '../../../../common/types'
import { ImageSearchResult, TemplateEditorState } from '../../types'
import { AddMainAimsOutcomes } from '../AddMainAimsOutcomes'
import { ImagePicker } from '../ImagePicker/ImagePicker'
import styles from './CreateTemplate.module.scss'

export interface Props {
  loading: string | null
  error: string | null
  selectedTemplateId: string
  handleSaveDraftClicked: (template: TemplateCreation) => void
  handlePublishClicked: (template: TemplateCreation) => void
  initialTemplateEditorData: TemplateEditorState
  imageSearchResults: ImageSearchResult[]
  handleFetchImages: (searchTerm: string, page: number) => void
  areNextImagesLoading: boolean
  searchTerm: string
}

const theme = createMuiTheme({
  palette: { primary: grey, secondary: orange },
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
  imageSearchResults,
  handleFetchImages,
  areNextImagesLoading,
  searchTerm,
}) => {
  const [showImagePicker, setShowImagePicker] = useState(false)
  const [selectedImages, setSelectedImages] = useState<ImageUrls | null>(
    initialTemplateEditorData.imageUrls,
  )

  const {
    register,
    errors,
    handleSubmit,
    control,
    watch,
    setValue,
    getValues,
  } = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    defaultValues: {
      category: initialTemplateEditorData.category,
      title: initialTemplateEditorData.title,
      shortDescription: initialTemplateEditorData.shortDescription,
      mainAimsOutcomes: initialTemplateEditorData.mainAimsOutcomes,
      suggestedDuration: initialTemplateEditorData.suggestedDuration,
      personalizedDescription:
        initialTemplateEditorData.personalizedDescription,
      participantRange:
        initialTemplateEditorData.participantRange &&
        initialTemplateEditorData.participantRange.length > 0
          ? initialTemplateEditorData.participantRange
          : [2, 4],
      hostInstructions: initialTemplateEditorData.hostInstructions,
      whatYouDo: initialTemplateEditorData.whatYouDo,
      howYouDo: initialTemplateEditorData.howYouDo,
      imageUrl: initialTemplateEditorData.imageUrls,
      callProviders:
        initialTemplateEditorData.callProviders &&
        initialTemplateEditorData.callProviders.length > 0
          ? initialTemplateEditorData.callProviders
          : ['Google Meet (Hangouts)'],
    },
  })

  const watchAllFields = watch()

  const handleSaveDraftClick = (): void => {
    handleSaveDraftClicked({
      ...watchAllFields,
      templateId: selectedTemplateId,
      imageUrls: selectedImages,
    })
  }

  const helperTestClasses = helperTextStyles()
  const onSubmit = (): void => {
    handlePublishClicked({
      ...watchAllFields,
      templateId: selectedTemplateId,
      imageUrls: selectedImages,
    })
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
            Hey! Now that you&apos;re here, describe something that others could
            do on a video call. Perhaps it&apos;s something you do often or
            something that you&apos;ve just discovered. See the Browser for some
            examples but be as creative as you&apos;d like.
            <br></br>
            <br></br>
            When you&apos;re happy with what you&apos;ve written click Publish
            and it will be made public in the Template Browser.
          </p>
        </header>
        {/* <DevTool control={control} /> */}

        <div
          className={styles.imageBox}
          onClick={(): void => setShowImagePicker(true)}
        >
          {selectedImages && (
            <img
              src={selectedImages?.regular}
              alt=""
              className={styles.selectedImage}
            />
          )}
          <button>
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M32.0001 0.333252C25.737 0.333252 19.6146 2.19047 14.407 5.67005C9.19944 9.14963 5.14064 14.0953 2.74387 19.8816C0.347095 25.6679 -0.280011 32.035 0.941854 38.1778C2.16372 44.3205 5.17968 49.963 9.60834 54.3916C14.037 58.8203 19.6795 61.8363 25.8222 63.0581C31.9649 64.28 38.332 63.6529 44.1184 61.2561C49.9047 58.8593 54.8503 54.8005 58.3299 49.593C61.8095 44.3854 63.6667 38.263 63.6667 31.9999C63.6667 27.8414 62.8476 23.7236 61.2562 19.8816C59.6648 16.0396 57.3323 12.5487 54.3918 9.6082C51.4512 6.66768 47.9603 4.33513 44.1184 2.74373C40.2764 1.15233 36.1586 0.333252 32.0001 0.333252V0.333252ZM32.0001 57.3333C26.9896 57.3333 22.0917 55.8475 17.9256 53.0638C13.7596 50.2802 10.5125 46.3236 8.59511 41.6946C6.67769 37.0655 6.176 31.9718 7.1535 27.0576C8.13099 22.1434 10.5438 17.6295 14.0867 14.0865C17.6296 10.5436 22.1436 8.13085 27.0578 7.15336C31.972 6.17587 37.0656 6.67755 41.6947 8.59497C46.3238 10.5124 50.2803 13.7594 53.0639 17.9255C55.8476 22.0915 57.3334 26.9895 57.3334 31.9999C57.3334 38.7187 54.6643 45.1624 49.9134 49.9133C45.1625 54.6642 38.7189 57.3333 32.0001 57.3333V57.3333ZM44.6667 28.8333H35.1667V19.3333C35.1667 18.4934 34.8331 17.6879 34.2392 17.0941C33.6454 16.5002 32.8399 16.1666 32.0001 16.1666C31.1602 16.1666 30.3547 16.5002 29.7609 17.0941C29.167 17.6879 28.8334 18.4934 28.8334 19.3333V28.8333H19.3334C18.4935 28.8333 17.6881 29.1669 17.0942 29.7607C16.5004 30.3546 16.1667 31.1601 16.1667 31.9999C16.1667 32.8398 16.5004 33.6452 17.0942 34.2391C17.6881 34.833 18.4935 35.1666 19.3334 35.1666H28.8334V44.6666C28.8334 45.5064 29.167 46.3119 29.7609 46.9058C30.3547 47.4996 31.1602 47.8333 32.0001 47.8333C32.8399 47.8333 33.6454 47.4996 34.2392 46.9058C34.8331 46.3119 35.1667 45.5064 35.1667 44.6666V35.1666H44.6667C45.5066 35.1666 46.312 34.833 46.9059 34.2391C47.4998 33.6452 47.8334 32.8398 47.8334 31.9999C47.8334 31.1601 47.4998 30.3546 46.9059 29.7607C46.312 29.1669 45.5066 28.8333 44.6667 28.8333Z"
                fill="#E0E0E0"
              />
            </svg>
            Click to search for an image
          </button>
        </div>

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
              rowsMax="3"
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
              placeholder="This description should entice people you have a look at the template you've created and consider using it"
              variant="outlined"
              rows="2"
              rowsMax="6"
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
            <h2>Personalized message & description</h2>
            <p>
              This together with the &quot;What/How you&apos;ll do it&quot;
              sections below will be sent to the guests of the person using this
              template
            </p>
            <TextField
              style={{ marginTop: '16px' }}
              FormHelperTextProps={{ classes: helperTestClasses }}
              label="Personalized message/description"
              placeholder="E.g. Hi! Would you like to play some online chess... "
              name="personalizedDescription"
              variant="outlined"
              rows="2"
              rowsMax="6"
              fullWidth
              multiline
              helperText={errors?.personalizedDescription?.message}
              error={!!errors.personalizedDescription}
              inputRef={register({
                required: 'Add the personal touch that every invitation needs',
                minLength: {
                  value: 20,
                  message:
                    'Add a bit more to your description (min length 20 char)',
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
            <h2>Main Aims & Outcomes</h2>
            <p>
              e.g. Community, Fun, Insightful, Exercise, Conversation Started
            </p>
            <Controller
              as={<AddMainAimsOutcomes onChange={(value): any => value} />}
              name="mainAimsOutcomes"
              control={control}
            />

            <h2>Suggested Video/Voice Call Providers</h2>
            <FormControl
              style={{
                width: '100%',
                marginTop: '16px',
              }}
            >
              <Controller
                name="callProviders"
                as={
                  <Select
                    multiple
                    fullWidth
                    variant="outlined"
                    renderValue={(selected): any => (
                      <div className={styles.chips}>
                        {(selected as string[]).map((value) => (
                          <Chip
                            key={value}
                            label={value}
                            style={{ marginRight: '4px' }}
                          />
                        ))}
                      </div>
                    )}
                  >
                    {callProviders.map((provider: string): any => (
                      <MenuItem key={provider} value={provider}>
                        <Checkbox
                          checked={
                            provider
                              ? (getValues(
                                  'callProviders',
                                ) as string[]).indexOf(provider) > -1
                              : false
                          }
                        />
                        <ListItemText primary={provider} />
                      </MenuItem>
                    ))}
                  </Select>
                }
                rules={{ required: 'Please select a duration' }}
                control={control}
              />
              <ErrorMessage
                className={styles.errorMessage}
                errors={errors}
                name="callProviders"
                as="p"
              />
            </FormControl>
            <h2>What you&apos;ll do</h2>
            <p>
              Describe what exactly the participants will do while on the
              video/voice call
            </p>
            <TextField
              name="whatYouDo"
              style={{ marginTop: '16px' }}
              FormHelperTextProps={{ classes: helperTestClasses }}
              id="outlined-basic"
              label="What you'll do"
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
            <h2>How you&apos;ll do it</h2>
            <p>
              Do the participants have to do any preparation ahead of time (e.g.
              download an app, prepare a topic)?
            </p>
            <TextField
              name="howYouDo"
              style={{ marginTop: '16px' }}
              id="outlined-basic"
              label="How you'll do it"
              variant="outlined"
              rows="4"
              rowsMax="14"
              fullWidth
              multiline
              placeholder="e.g. 1) You'll need to create an account on chess.com 2) Just before the game, one of you will need to go to the following link..."
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
            <h2>Additional info for the host only</h2>
            <p></p>
            <TextField
              name="hostInstructions"
              style={{ marginTop: '16px' }}
              id="outlined-basic"
              label="Host Instructions"
              variant="outlined"
              rows="4"
              rowsMax="14"
              fullWidth
              multiline
              placeholder="e.g. hosting guide, tools they could use, interaction guidelines,
              specific preparation they need to do"
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
      {showImagePicker && (
        <div className={styles.authModal}>
          <ImagePicker
            searchTerm={searchTerm}
            areNextImagesLoading={areNextImagesLoading}
            imageSearchResults={imageSearchResults}
            handleFetchImages={handleFetchImages}
            handleSelectedImage={(selectedImageUrls: ImageUrls): void => {
              setShowImagePicker(false)
              setSelectedImages(selectedImageUrls)
            }}
            handleCloseImagePicker={(): void => setShowImagePicker(false)}
          />
        </div>
      )}
    </Fragment>
  )
}
