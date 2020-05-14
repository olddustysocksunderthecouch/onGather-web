import React, { useState } from 'react'
import { VariableSizeGrid as Grid } from 'react-window'
import InfiniteLoader from 'react-window-infinite-loader'
import { useWindowDimensions } from '../../../../common/hooks'
import { ImageSearchResult } from '../../types'
import { SearchBar } from '../SearchBar'
import CloseIcon from './../../../../common/assets/close-icon.svg'
import styles from './ImagePicker.module.scss'
import { createItemData, renderItem } from './item-renderer'

export interface Props {
  areNextImagesLoading: boolean
  imageSearchResults: ImageSearchResult[]
  handleFetchImages: (searchTerm: string, page: number) => void
  handleSelectedImage: (selectedImage: ImageSearchResult) => void
}

export const ImagePicker: React.FunctionComponent<Props> = ({
  imageSearchResults,
  areNextImagesLoading,
  handleFetchImages,
  handleSelectedImage,
}) => {
  const { width, height } = useWindowDimensions()
  const searchBarHeight = 59
  const topNavHeight = 72
  const bottomNavHeight = 49
  const gridHeight = height - searchBarHeight - topNavHeight - bottomNavHeight

  let rowWidth: number
  switch (true) {
    case width <= 425:
      rowWidth = width * 0.9
      break
    case width <= 768:
      rowWidth = width * 0.6
      break
    case width <= 1024:
      rowWidth = width * 0.5
      break
    case width <= 1440:
      rowWidth = width * 0.4
      break
    case width <= 1600:
      rowWidth = width * 0.35
      break
    default:
      rowWidth = width * 0.35
  }

  const isImageLoaded = (index: number): boolean =>
    index < imageSearchResults.length
  const gridItemCount = imageSearchResults.length + 2
  const [searchTerm, setSearchTerm] = useState('')

  const itemData = createItemData(
    imageSearchResults,
    handleSelectedImage,
    rowWidth,
  )

  const handleSearchTermChange = (term: string): void => {
    handleFetchImages(term, 0)
    setSearchTerm(term)
  }

  const loadMoreImages = (): Promise<any> => {
    return areNextImagesLoading
      ? Promise.resolve()
      : Promise.resolve(
          handleFetchImages(searchTerm, imageSearchResults.length / 20 + 1),
        )
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h3>
          <a href="https://unsplash.com/">Images from Unsplashed</a>
        </h3>
        <button className={styles.closeIcon}>
          <img src={CloseIcon} alt="close icon" />
        </button>
      </div>
      <hr className={styles.topLine} />
      <SearchBar
        placeholderText={'Search & select an image'}
        handleSearchTermChanged={handleSearchTermChange}
      />
      <hr className={styles.bottomLine} />
      <InfiniteLoader
        isItemLoaded={isImageLoaded}
        itemCount={gridItemCount}
        loadMoreItems={loadMoreImages}
        minimumBatchSize={20}
      >
        {({ ref, onItemsRendered }): JSX.Element => (
          <Grid
            itemData={itemData}
            columnCount={2}
            columnWidth={(): number => rowWidth / 2}
            height={gridHeight}
            rowCount={gridItemCount / 2}
            rowHeight={(): number => rowWidth / 3}
            width={rowWidth}
            ref={ref}
            onItemsRendered={({
              visibleRowStartIndex,
              visibleRowStopIndex,
              overscanRowStopIndex,
              overscanRowStartIndex,
            }): void => {
              onItemsRendered({
                overscanStartIndex: overscanRowStartIndex * 2,
                overscanStopIndex: overscanRowStopIndex * 2,
                visibleStartIndex: visibleRowStartIndex * 2,
                visibleStopIndex: visibleRowStopIndex * 2,
              })
            }}
          >
            {renderItem}
          </Grid>
        )}
      </InfiniteLoader>
    </div>
  )
}
