import { NextPage } from 'next'

import ThePage from '../components/singleton/ThePage/ThePage'
import styles from './index.module.scss'

const IndexPage: NextPage = () => {
  return (
    <ThePage>
      <p data-test="empty-search" className={styles.noSearchText}>
        Aún no has realizado ninguna búsqueda
      </p>
    </ThePage>
  )
}

export default IndexPage
