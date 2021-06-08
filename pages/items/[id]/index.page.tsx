import { useState } from 'react'

import styles from './itemInfo.module.scss'
import ThePage from '../../../components/singleton/ThePage/ThePage'
import TheSearchBreadcrumbs from '../../../components/singleton/TheSearchBreadcrumbs/TheSearchBreadcrumbs'
import { ItemInfoPageProps } from './types'
import { formatItemPrice, formatItemPriceDecimals } from '../../../utils/format'
import { ITEM_CATEGORIES_KEY } from '../types'
import { MeLiImageType, resolveMeLiImageURL } from '../../../utils/resolve'
import { useOnMount } from '../../../hooks/useOnMount'

// Export ssr handler
export { getServerSideProps } from './serverSide'

const ItemInfoPage: React.FC<ItemInfoPageProps> = ({ item }) => {
  const [categories, setCategories] = useState([])

  useOnMount(() => {
    try {
      // Load saved categories
      setCategories(
        JSON.parse(
          localStorage.getItem(`${ITEM_CATEGORIES_KEY}:${item.id}`)!
        ) ?? []
      )
    } catch (_) {
      // Ignore error
      // If user doesn't perform any search previously
      // (or clear its localStorage) we just don't load categories
    }
  })

  return (
    <ThePage titlePrefix={item.title}>
      <TheSearchBreadcrumbs categories={categories} />

      <div className={styles.itemInfoContainer}>
        <div className={styles.itemInfoTopContainer}>
          <img
            data-test="item-picture"
            src={resolveMeLiImageURL(item.picture, MeLiImageType.picture)}
            srcSet={`${resolveMeLiImageURL(
              item.picture,
              MeLiImageType.highDensity
            )} 2x`}
            className={styles.itemInfoPicture}
          />

          <div className={styles.itemInfoTopInfo}>
            <p data-test="item-condition" className={styles.itemInfoCondition}>
              {item.condition === 'new' ? 'Nuevo' : 'Usado'} -{' '}
              {item.sold_quantity} vendidos
            </p>

            <h2 data-test="item-title" className={styles.itemInfoTitle}>
              {item.title}
            </h2>

            <h3 data-test="item-price" className={styles.itemInfoPrice}>
              {formatItemPrice(item.price.amount)}
              <sup>{formatItemPriceDecimals(item.price.decimals)}</sup>
            </h3>

            <button
              data-test="item-buy-btn"
              className={styles.itemInfoPriceBuyBtn}>
              Comprar
            </button>
          </div>
        </div>

        <div className={styles.itemInfoBottomContainer}>
          <h4
            data-test="item-description-title"
            className={styles.itemInfoDescriptionTitle}>
            Descripción del producto
          </h4>

          <div
            data-test="item-description"
            className={styles.itemInfoDescriptionText}
            dangerouslySetInnerHTML={{ __html: item.description }}
          />
        </div>
      </div>
    </ThePage>
  )
}

export default ItemInfoPage
