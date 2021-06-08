import Link from 'next/link'
import className from 'classnames'

import CommonImage from '../../common/CommonImage/CommonImage'
import styles from './TheHeader.module.scss'
import TheSearchBar from '../TheSearchBar/TheSearchBar'

const TheHeader: React.FC = () => {
  return (
    <header className={styles.headerWrapper}>
      <div
        className={className(
          'o-container o-grid u-px-to-m',
          styles.headerContainer
        )}>
        <div
          className={className(
            styles.headerLogoContainer,
            'o-grid__column-start-1 o-grid__column-start-m-2'
          )}>
          <Link href="/">
            <a>
              <CommonImage name="Logo_ML" alt="MercadoLibre Logo" />
            </a>
          </Link>
        </div>

        <div className="o-grid__column-span-11 o-grid__column-span-m-9">
          <TheSearchBar />
        </div>
      </div>
    </header>
  )
}

export default TheHeader
