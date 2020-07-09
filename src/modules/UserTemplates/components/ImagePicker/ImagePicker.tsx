import React, { useState } from 'react'
import AutoSizer from 'react-virtualized-auto-sizer'
import { VariableSizeGrid as Grid } from 'react-window'
import InfiniteLoader from 'react-window-infinite-loader'
import { useWindowDimensions } from '../../../../common/hooks'
import { ImageUrls } from '../../../../common/types'
import { ImageSearchResult } from '../../types'
import { SearchBar } from '../SearchBar'
import CloseIcon from './../../../../common/assets/close-icon.svg'
import styles from './ImagePicker.module.scss'
import { createItemData, renderItem } from './item-renderer'

export interface Props {
  areNextImagesLoading: boolean
  imageSearchResults: ImageSearchResult[]
  totalImagesAvailable: number
  handleFetchImages: (searchTerm: string, page: number) => void
  handleSelectedImage: (selectedImageUrls: ImageUrls) => void
  handleCloseImagePicker: () => void
  searchTerm: string
}

export const ImagePicker: React.FunctionComponent<Props> = ({
  imageSearchResults,
  totalImagesAvailable,
  areNextImagesLoading,
  handleFetchImages,
  handleSelectedImage,
  handleCloseImagePicker,
  searchTerm: searchTermFromState,
}) => {
  const { width } = useWindowDimensions()

  let rowWidth: number
  switch (true) {
    case width <= 768:
      rowWidth = width * 0.9
      break
    case width <= 1024:
      rowWidth = width * 0.6
      break
    case width <= 1440:
      rowWidth = width * 0.5
      break
    case width <= 1600:
      rowWidth = width * 0.4
      break
    default:
      rowWidth = width * 0.35
  }

  const isImageLoaded = (index: number): boolean =>
    index < imageSearchResults.length
  const gridItemCount = imageSearchResults.length + 2
  const [searchTerm, setSearchTerm] = useState(searchTermFromState)

  const itemData = createItemData(
    imageSearchResults,
    handleSelectedImage,
    rowWidth,
    areNextImagesLoading,
    totalImagesAvailable,
  )

  const handleSearchTermChange = (term: string): void => {
    handleFetchImages(term, 1)
    setSearchTerm(term)
  }

  const currentPageIndex = Math.floor(imageSearchResults.length / 20) + 1

  const loadMoreImages = (): Promise<any> => {
    return !areNextImagesLoading &&
      (!totalImagesAvailable ||
        imageSearchResults.length < totalImagesAvailable)
      ? Promise.resolve(handleFetchImages(searchTerm, currentPageIndex))
      : Promise.resolve()
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h3>
          <a href="https://unsplash.com/">Images from Unsplash</a>
        </h3>
        <button className={styles.closeIcon} onClick={handleCloseImagePicker}>
          <img src={CloseIcon} alt="close icon" />
        </button>
      </div>
      <hr className={styles.topLine} />
      <SearchBar
        initialValue={searchTermFromState}
        placeholderText={'Search & select an image'}
        handleSearchTermChanged={handleSearchTermChange}
      />
      <hr className={styles.bottomLine} />
      <div style={{ height: '100%' }}>
        <AutoSizer disableWidth>
          {({ height }: { height: number }): any => (
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
                  height={height}
                  rowCount={Math.ceil(gridItemCount / 2)}
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
          )}
        </AutoSizer>
      </div>
    </div>
  )
}
