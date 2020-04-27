import { grey } from '@material-ui/core/colors'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import Slider from '@material-ui/core/Slider'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import React, { ChangeEvent, useEffect, useState } from 'react'
import { categories, durations } from '../../../../common/constants'
import { Duration, TemplateCreation } from '../../../../common/types'
import { Category } from '../../types'
import { UploadImage } from '../UploadImage'
import styles from './CreateTemplate.module.scss'

export interface Props {
  loading: string | null
  error: string | null
  handleTemplateDataChange: (template: TemplateCreation) => void
  handleImageSelected: (url: string) => void
}

const theme = createMuiTheme({
  palette: {
    primary: grey,
  },
  typography: {
    fontFamily: 'Raleway',
  },
})

const marks = [
  {
    value: 0,
    label: '0',
  },
  {
    value: 10,
    label: '10',
  },
  {
    value: 20,
    label: '20',
  },
]

export const CreateTemplate: React.FunctionComponent<Props> = ({
  loading,
  error,
  handleTemplateDataChange,
  handleImageSelected,
}) => {
  const [categorySelected, setCategorySelected] = useState('')
  const handleCategorySelected = (
    event: React.ChangeEvent<{ value: unknown }>,
  ): void => {
    setCategorySelected(event.target.value as Category)
  }
  const [durationSelected, setDurationSelected] = useState('')
  const handleDurationChange = (
    event: React.ChangeEvent<{ value: unknown }>,
  ): void => {
    setDurationSelected(event.target.value as string)
  }

  const [participantRange, setParticipantRange] = useState<number[]>([2, 4])

  const handleParticipantRange = (
    event: any,
    newValue: number | number[],
  ): void => {
    setParticipantRange(newValue as number[])
  }

  const [title, setTitle] = useState('')
  const [shortDescription, setShortDescription] = useState('')
  const [mainAimsOutcomes, setMainAimsOutcomes] = useState('')
  const [hostInstructions, setHostInstructions] = useState('')
  const [invitationDescription, setInvitationDescription] = useState('')

  useEffect(() => {
    const templateData: TemplateCreation = {
      category: categorySelected,
      title,
      shortDescription,
      mainAimsOutcomes,
      suggestedDuration: durationSelected,
      imageUrl: '',
      hostInstructions,
      invitationDescription,
    }

    handleTemplateDataChange(templateData)
  }, [
    categorySelected,
    title,
    shortDescription,
    mainAimsOutcomes,
    durationSelected,
    hostInstructions,
    invitationDescription,
  ])

  return (
    <div className={styles.createTemplate}>
      <header>
        <h1>Template Creator</h1>
        <p>
          Some text explaining some things. Sometimes it explains even more
          things about things that you’ve never heard of.
        </p>
      </header>
      <ThemeProvider theme={theme}>
        <FormControl
          style={{ marginTop: '36px', width: '300px' }}
          variant="outlined"
        >
          <InputLabel>Category</InputLabel>
          <Select
            value={categorySelected}
            onChange={handleCategorySelected}
            label="Category"
          >
            {categories.map((category: string) => {
              return (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              )
            })}
          </Select>
        </FormControl>

        <form className={styles.form} noValidate autoComplete="on">
          <TextField
            style={{ marginTop: '16px', width: '300px' }}
            label="Title"
            variant="outlined"
            onChange={(event: ChangeEvent<HTMLInputElement>): void => {
              setTitle(event.target.value)
            }}
          />
          <TextField
            style={{ marginTop: '16px' }}
            label="Short Description"
            variant="outlined"
            rows="2"
            fullWidth
            multiline
            onChange={(event: ChangeEvent<HTMLInputElement>): void => {
              setShortDescription(event.target.value)
            }}
          />
          <TextField
            style={{ marginTop: '16px' }}
            id="outlined-basic"
            label="Main Aims & Outcomes"
            variant="outlined"
            fullWidth
            helperText="Put commas between each item"
            onChange={(event: ChangeEvent<HTMLInputElement>): void => {
              setMainAimsOutcomes(event.target.value)
            }}
          />
        </form>
        <FormControl
          style={{ marginTop: '16px', width: '300px' }}
          variant="outlined"
        >
          <InputLabel>Suggested Duration</InputLabel>
          <Select
            value={durationSelected}
            onChange={handleDurationChange}
            label="Suggested Duration"
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
        </FormControl>

        <h2>Number of participants</h2>
        <Slider
          style={{ marginTop: '56px', width: '300px' }}
          step={1}
          value={participantRange}
          onChange={handleParticipantRange}
          valueLabelDisplay="on"
          aria-labelledby="discrete-slider-restrict"
          marks={marks}
          min={0}
          max={20}
          // getAriaValueText={}
        />
        <form className={styles.form} noValidate autoComplete="on">
          <h2>Upload an image</h2>
          <UploadImage handleImageSelected={handleImageSelected} />
          <h2>Instructions for the host</h2>
          <p>
            e.g. hosting guide, tools they could use, interaction guidelines,
            specific preparation they need to do
          </p>
          <TextField
            style={{ marginTop: '16px' }}
            id="outlined-basic"
            label="Host Instructions"
            variant="outlined"
            rows="4"
            fullWidth
            multiline
            onChange={(event: ChangeEvent<HTMLInputElement>): void => {
              setHostInstructions(event.target.value)
            }}
          />
          <h2>Invitation Description</h2>
          <p>
            This description will be added to the google calendar invite which
            will be sent guests
          </p>
          <TextField
            style={{ marginTop: '16px' }}
            id="outlined-basic"
            label="Description"
            variant="outlined"
            rows="4"
            fullWidth
            multiline
            onChange={(event: ChangeEvent<HTMLInputElement>): void => {
              setInvitationDescription(event.target.value)
            }}
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
  )
}
