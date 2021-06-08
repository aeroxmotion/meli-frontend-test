import Link from 'next/link'

import CommonImage from '../components/common/CommonImage/CommonImage'
import styles from './404.module.scss'

const NotFound: React.FC = () => {
  return (
    <div className={styles.container}>
      <CommonImage name="Logo_ML" />

      <p className={styles.subTitle}>No hemos podido encontrar nada</p>

      <Link href="/">
        <a className={styles.goHomeLink}>Ir al inicio</a>
      </Link>
    </div>
  )
}

export default NotFound
