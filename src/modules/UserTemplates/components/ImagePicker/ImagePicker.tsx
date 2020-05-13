import React, { useState } from 'react'
import { VariableSizeGrid as Grid } from 'react-window'
import InfiniteLoader from 'react-window-infinite-loader'
import { useWindowDimensions } from '../../../../common/hooks'
import { SearchBar } from '../SearchBar'
import styles from './ImagePicker.module.scss'
import { createItemData, renderItem } from './item-renderer'
import { ImageSearchResult } from '../../types'

export interface Props {
  areNextImagesLoading: boolean
  imageSearchResults: ImageSearchResult[]
  handleFetchImages: (searchTerm: string, page: number) => void
  handleSelectedImage: (selectedImage: ImageSearchResult) => void
  selectedImage: string
}

export const ImagePicker: React.FunctionComponent<Props> = ({
  imageSearchResults,
  areNextImagesLoading,
  handleFetchImages,
  handleSelectedImage,
  selectedImage,
}) => {
  const { width, height } = useWindowDimensions()
  const searchBarHeight = 59
  const topNavHeight = 72
  const bottomNavHeight = 49
  const gridHeight = height - searchBarHeight - topNavHeight - bottomNavHeight

  const isImageLoaded = (index: number): boolean =>
    index < imageSearchResults.length
  const gridItemCount = imageSearchResults.length + 2
  const [searchTerm, setSearchTerm] = useState('')

  const itemData = createItemData(
    imageSearchResults,
    handleSelectedImage,
    width,
    selectedImage,
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
      <SearchBar
        placeholderText={'Search GIFs'}
        handleSearchTermChanged={handleSearchTermChange}
      />
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
            columnWidth={(): number => width / 5}
            height={gridHeight}
            rowCount={gridItemCount / 2}
            rowHeight={(index): number =>
              isImageLoaded(index * 2) && index > 10 ? width / 5 : width / 5
            }
            width={width * 0.4}
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
