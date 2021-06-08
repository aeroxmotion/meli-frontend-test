import classNames from 'classnames'

import { TheSearchBreadcrumbsProps } from './types'
import styles from './TheSearchBreadcrumbs.module.scss'

const TheSearchBreadcrumbs: React.FC<TheSearchBreadcrumbsProps> = ({
  categories
}) => {
  return (
    <div
      className={classNames(styles.searchBreadcrumbsContainer, 'u-hide-to-m')}>
      {categories.map(category => (
        <p
          key={category}
          data-test="search-breadcrumb"
          className={styles.searchBreadcrumb}>
          {category}
        </p>
      ))}
    </div>
  )
}

export default TheSearchBreadcrumbs
