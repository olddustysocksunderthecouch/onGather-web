import classNames from 'classnames'
import memoize from 'memoize-one'
import React from 'react'
import { ImageSearchResult } from '../../types'
import styles from './item-renderer.module.scss'

export const renderItem = ({
  data,
  columnIndex,
  rowIndex,
  style,
}: any): JSX.Element => {
  const { imageSearchResults, handleSelectedImage, rowWidth } = data
  const index = rowIndex * 2 + columnIndex
  const showLoading = index >= imageSearchResults.length - 1
  if (showLoading) {
    return <></>
  }

  const {
    images,
    attributionName,
    attributionLink,
    altDescription,
  } = imageSearchResults[index]

  const handleImageClicked = (imageSearchResults: ImageSearchResult): void => {
    handleSelectedImage(imageSearchResults)
  }

  return (
    <div
      className={classNames({
        [styles.imgContainer]: true,
      })}
      style={{
        ...style,
        left: style.left + 2,
        top: style.top + 2,
        width: rowWidth / 2 - 10,
        height: rowWidth / 3 - 10,
      }}
    >
      <img
        id="imageGridItem"
        src={images.small}
        alt={altDescription}
        style={{
          backgroundColor: '#A4A4A4',
          objectFit: 'cover',
        }}
        onClick={(): void => handleImageClicked(imageSearchResults[index])}
      />
      <div className={styles.attribution}>
        <a href={attributionLink}>{attributionName}</a>
      </div>
    </div>
  )
}

export const createItemData = memoize(
  (imageSearchResults, handleSelectedImage, rowWidth) => ({
    imageSearchResults,
    handleSelectedImage,
    rowWidth,
  }),
)
