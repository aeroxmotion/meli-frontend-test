import React from 'react'
import { NextPage } from 'next'
import classNames from 'classnames'
import { useRouter } from 'next/router'

import type { ItemInfo } from '../../clients/ProxyClient'
import { ItemsPageProps } from './types'
import CommonSearchItem from '../../components/common/CommonSearchItem/CommonSearchItem'
import ThePage from '../../components/singleton/ThePage/ThePage'
import TheSearchBreadcrumbs from '../../components/singleton/TheSearchBreadcrumbs/TheSearchBreadcrumbs'
import styles from './items.module.scss'

// Export ssr handler
export { getServerSideProps } from './serverSide'

const ItemsPage: NextPage<ItemsPageProps> = ({ items, categories }) => {
  const router = useRouter()

  const goToItemInfo = (id: ItemInfo['id']) => {
    router.push({
      pathname: '/items/[id]',
      query: {
        id
      }
    })
  }

  const renderNotFound = () => (
    <p className={styles.itemsNotFound}>
      No hemos podido encontrar ningún producto que coincida con tu criterio de
      búsqueda
    </p>
  )

  const renderContent = () => (
    <>
      <TheSearchBreadcrumbs categories={categories} />

      <div className={classNames(styles.itemsContainer, 'u-no-br-to-m')}>
        {items.map((item, index) => (
          <React.Fragment key={item.id}>
            {!!index && <div className={styles.itemSeparator} />}

            <CommonSearchItem
              item={item}
              onClick={() => goToItemInfo(item.id)}
            />
          </React.Fragment>
        ))}
      </div>
    </>
  )

  return (
    <ThePage titlePrefix="Búsqueda">
      {(items.length ? renderContent : renderNotFound)()}
    </ThePage>
  )
}

export default ItemsPage
