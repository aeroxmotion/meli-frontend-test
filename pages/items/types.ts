import { SearchItemsResult } from '../../clients/ProxyClient'

export const ITEM_CATEGORIES_KEY = 'meli:item-categories'

export type ItemsPageProps = {
  categories: SearchItemsResult['categories']
  items: SearchItemsResult['items']
}
