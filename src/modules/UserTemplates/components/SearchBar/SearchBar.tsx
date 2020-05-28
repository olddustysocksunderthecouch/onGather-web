import classNames from 'classnames'
import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import closeIcon from './assets/CloseIcon.svg'
import searchIcon from './assets/SearchIcon.svg'
import styles from './SearchBar.module.scss'

export interface Props {
  placeholderText: string
  initialValue?: string
  handleSearchTermChanged: (value: string) => void
}

export const SearchBar: React.FunctionComponent<Props> = ({
  placeholderText,
  initialValue,
  handleSearchTermChanged,
}) => {
  const didMountRef = useRef(false)
  const [searchBarInput, setSearchBarInput] = useState('')

  const [showCloseIcon, setShowCloseIcon] = useState(false)

  useEffect(() => {
    if (searchBarInput) {
      return setShowCloseIcon(true)
    }
    return setShowCloseIcon(false)
  }, [searchBarInput])

  useEffect(() => {
    if (!didMountRef.current) {
      if (initialValue) {
        setSearchBarInput(initialValue)
      }
      didMountRef.current = true
      return
    }
  }, [initialValue])

  const handleInputChange = (value: string): void => {
    setSearchBarInput(value)
    handleSearchTermChanged(value)
  }

  const handleClearingInput = (): void => {
    handleInputChange('')
    handleSearchTermChanged('')
  }

  return (
    <div data-testid="searchBarContainer" className={styles.container}>
      <div className={styles.inputContainer}>
        <img src={searchIcon} alt="Search Icon" className={styles.searchIcon} />
        <input
          data-testid="searchBarInput"
          placeholder={placeholderText}
          value={searchBarInput}
          onChange={(event: ChangeEvent<HTMLInputElement>): void => {
            handleInputChange(event.target.value)
          }}
        />
        <img
          src={closeIcon}
          alt="Close Icon"
          className={classNames({
            [styles.closeIcon]: true,
            [styles.show]: showCloseIcon,
          })}
          onClick={handleClearingInput}
        />
      </div>
    </div>
  )
}
