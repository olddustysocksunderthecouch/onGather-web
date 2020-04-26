import classes from 'classnames'
import React from 'react'
import { browserCategories } from '../../../../common/constants'
import MoreIcon from './assets/MoreIcon.svg'
import styles from './CategorySelector.module.scss'

export interface Props {
  activeCategory: string
  handleCategoryClicked: (category: string) => void
}

export const CategorySelector: React.FunctionComponent<Props> = ({
  activeCategory,
  handleCategoryClicked,
}) => {
  const categoryButtonStyle = (category: string): object => {
    return {
      [styles.categoryItem]: true,
      [styles.categoryItemSelected]: activeCategory == category,
    }
  }
  return (
    <nav className={styles.container}>
      <img className={styles.leftMoreIcon} src={MoreIcon} alt="More Icon" />
      <div className={styles.horizontalScrollView}>
        {browserCategories.map((category: string) => {
          return (
            <button
              key={category}
              className={classes(categoryButtonStyle(category))}
              onClick={(): void => handleCategoryClicked(category)}
              data-testid={`test-${category}`}
            >
              {category}
              {category == activeCategory && (
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
