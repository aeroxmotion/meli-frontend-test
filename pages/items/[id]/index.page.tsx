import styles from './itemInfo.module.scss'
import ThePage from '../../../components/singleton/ThePage/ThePage'
import TheSearchBreadcrumbs from '../../../components/singleton/TheSearchBreadcrumbs/TheSearchBreadcrumbs'
import { ItemInfoPageProps } from './types'
import { formatItemPrice, formatItemPriceDecimals } from '../../../utils/format'
import { MeLiImageType, resolveMeLiImageURL } from '../../../utils/resolve'

// Export ssr handler
export { getServerSideProps } from './serverSide'

const ItemInfoPage: React.FC<ItemInfoPageProps> = ({ item }) => {
  return (
    <ThePage titlePrefix={item.title}>
      <TheSearchBreadcrumbs categories={item.categories} />

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
