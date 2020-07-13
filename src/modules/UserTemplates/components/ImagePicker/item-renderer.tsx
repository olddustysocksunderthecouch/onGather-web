import classNames from 'classnames'
import memoize from 'memoize-one'
import React from 'react'
import { ImageUrls } from '../../../../common/types'
import styles from './item-renderer.module.scss'

export const renderItem = ({
  data,
  columnIndex,
  rowIndex,
  style,
}: any): JSX.Element => {
  const {
    imageSearchResults,
    handleSelectedImage,
    rowWidth,
    areNextImagesLoading,
    totalImagesAvailable,
  } = data
  const index = rowIndex * 2 + columnIndex

  const showLoading =
    index > imageSearchResults.length - 1 && areNextImagesLoading
  if (showLoading) {
    return (
      <div
        style={{
          ...style,
          left: style.left + 2,
          top: style.top + 2,
          width: rowWidth / 2 - 5,
          height: rowWidth / 3 - 5,
        }}
        className={styles.loadingContainers}
      ></div>
    )
  }

  if (!areNextImagesLoading && index > totalImagesAvailable - 1) {
    return (
      <div
        style={{
          ...style,
          left: style.left + 2,
          top: style.top + 2,
          width: rowWidth / 2 - 5,
          height: rowWidth / 3 - 5,
        }}
      >
        no more results
      </div>
    )
  }

  const handleImageClicked = (
    images: ImageUrls,
    downloadLink: string,
  ): void => {
    handleSelectedImage(images, downloadLink)
  }
  if (imageSearchResults[index] && imageSearchResults[index].images) {
    const {
      images,
      attributionName,
      attributionLink,
      altDescription,
      downloadLink,
    } = imageSearchResults[index]

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
            objectFit: 'cover',
          }}
          onClick={(): void => handleImageClicked(images, downloadLink)}
        />
        <a className={styles.attribution} href={attributionLink}>
          {attributionName}
        </a>
      </div>
    )
  }

  return <div />
}

export const createItemData = memoize(
  (
    imageSearchResults,
    handleSelectedImage,
    rowWidth,
    areNextImagesLoading,
    totalImagesAvailable,
  ) => ({
    imageSearchResults,
    handleSelectedImage,
    rowWidth,
    areNextImagesLoading,
    totalImagesAvailable,
  }),
)
