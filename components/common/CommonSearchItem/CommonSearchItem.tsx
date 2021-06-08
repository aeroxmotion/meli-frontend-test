import classNames from 'classnames'

import { CommonSearchItemProps } from './types'
import styles from './CommonSearchItem.module.scss'
import { formatItemPrice } from '../../../utils/format'
import { MeLiImageType, resolveMeLiImageURL } from '../../../utils/resolve'
import CommonImage from '../CommonImage/CommonImage'

const CommonSearchItem: React.FC<CommonSearchItemProps> = ({
  item,
  onClick
}) => {
  return (
    <article
      data-test="search-item"
      className={styles.commonSearchItemContainer}
      onClick={onClick}>
      <img
        src={resolveMeLiImageURL(item.picture, MeLiImageType.thumbnail)}
        className={styles.commonSearchItemThumbnail}
      />

      <div className={classNames(styles.commonSearchItemContent, 'o-grid')}>
        <div className="o-grid__column-span-12 o-grid__column-span-m-8">
          <h3 className={styles.commonSearchItemPrice}>
            {formatItemPrice(
              parseFloat(`${item.price.amount}.${item.price.decimals}`)
            )}
            {item.free_shipping && (
              <CommonImage
                className={styles.commonSearchShippingIcon}
                name="ic_shipping"
              />
            )}
          </h3>
          <h2 className={styles.commonSearchItemTitle}>{item.title}</h2>
        </div>

        <div className="o-grid__column-span-12 o-grid__column-span-m-4">
          <p className={styles.commonSearchItemCity}>{item.city}</p>
        </div>
      </div>
    </article>
  )
}

export default CommonSearchItem
