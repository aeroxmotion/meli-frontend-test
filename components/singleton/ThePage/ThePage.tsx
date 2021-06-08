import Head from 'next/head'

import { ThePageProps } from './types'
import TheHeader from '../TheHeader/TheHeader'
import styles from '../ThePage/ThePage.module.scss'
import { resolveImagePath } from '../../../utils/resolve'

const ThePage: React.FC<ThePageProps> = ({ titlePrefix = '', children }) => {
  return (
    <main className={styles.pageContainer}>
      <Head>
        <title>{titlePrefix && `${titlePrefix} | `}MercadoLibre</title>
        <link
          rel="icon"
          type="image/png"
          href={resolveImagePath('Logo_ML', false)}
        />
      </Head>

      <TheHeader />

      <div className={styles.pageContent}>
        <div className="o-container o-grid u-full-height">
          <div className="o-grid__column-start-m-2 o-grid__column-end-m-12 o-grid__column-span-12">
            {children}
          </div>
        </div>
      </div>
    </main>
  )
}

export default ThePage
