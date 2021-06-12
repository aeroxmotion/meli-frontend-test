import classNames from 'classnames'

import { TheSearchBreadcrumbsProps } from './types'
import styles from './TheSearchBreadcrumbs.module.scss'

const TheSearchBreadcrumbs: React.FC<TheSearchBreadcrumbsProps> = ({
  categories
}) => {
  return (
    <ul
      className={classNames(styles.searchBreadcrumbsContainer, 'u-hide-to-m')}>
      {categories.map(category => (
        <li
          key={category}
          data-test="search-breadcrumb"
          className={styles.searchBreadcrumb}>
          {category}
        </li>
      ))}
    </ul>
  )
}

export default TheSearchBreadcrumbs
