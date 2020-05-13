import React from 'react'
import memoize from 'memoize-one'
import styles from './item-renderer.module.scss'
import classNames from 'classnames'
// import tick from './assets/large-tick.svg'
import { ImageSearchResult } from '../../types'

const colors = ['#60FFB6', '#609CFF', '#FFA960', '#FF6C60', '#FF4BA5']
const pickColorBasedOnIndex = (index: number): string =>
  colors[index % colors.length]

export const renderItem = ({
  data,
  columnIndex,
  rowIndex,
  style,
}: any): JSX.Element => {
  const { imageSearchResults, handleSelectedImage, width, selectedImage } = data
  const index = rowIndex * 2 + columnIndex
  const showLoading = index >= imageSearchResults.length - 1
  if (showLoading) {
    return <></>
  }

  const { images } = imageSearchResults[index]

  const handleImageClicked = (imageSearchResults: ImageSearchResult): void => {
    handleSelectedImage(imageSearchResults)
  }

  // const isSelected =
  // images === selectedImage || largeImage === selectedImage

  return (
    <div
      className={classNames({
        [styles.imgContainer]: true,
        // [styles.selected]: isSelected,
      })}
      style={{
        ...style,
        left: style.left + 2,
        top: style.top + 2,
        width: width / 2 - 6,
        height: width / 2 - 6,
      }}
    >
      {/* {isSelected && <img src={tick} alt="tick" className={styles.tick} />} */}
      <img
        id="imageGridItem"
        src={images.small}
        alt={'gif'}
        style={{
          backgroundColor: pickColorBasedOnIndex(index),
          objectFit: 'cover',
        }}
        onClick={(): void => handleImageClicked(imageSearchResults[index])}
      />
    </div>
  )
}

export const createItemData = memoize(
  (imageSearchResults, handleSelectedImage, width, selectedImage) => ({
    imageSearchResults,
    handleSelectedImage,
    width,
    selectedImage,
  }),
)
