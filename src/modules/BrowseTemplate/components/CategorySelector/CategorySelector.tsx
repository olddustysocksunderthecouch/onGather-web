import classes from 'classnames'
import React from 'react'
import { categories } from '../../../../common/constants'
import MoreIcon from './assets/MoreIcon.svg'
import styles from './CategorySelector.module.scss'

export interface Props {
  selectedCategory: string
  handleCategoryPicked: (category: string) => void
}

export const CategorySelector: React.FunctionComponent<Props> = ({
  selectedCategory,
  handleCategoryPicked,
}) => {
  const categoryButtonStyle = (category: string): object => {
    return {
      [styles.categoryItem]: true,
      [styles.categoryItemSelected]: selectedCategory == category,
    }
  }
  return (
    <nav className={styles.container}>
      <img className={styles.leftMoreIcon} src={MoreIcon} alt="More Icon" />
      <div className={styles.horizontalScrollView}>
        {categories.map((category: string) => {
          return (
            <button
              key={category}
              className={classes(categoryButtonStyle(category))}
              onClick={(): void => handleCategoryPicked(category)}
              data-testid={`test-${category}`}
            >
              {category}
              {category == selectedCategory && (
                <div className={styles.selectionIndicator} />
              )}
            </button>
          )
        })}
      </div>
      <img className={styles.rightMoreIcon} src={MoreIcon} alt="More Icon" />
    </nav>
  )
}
