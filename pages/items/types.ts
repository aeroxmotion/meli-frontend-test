import { SearchItemsResult } from '../../clients/ProxyClient'

export type ItemsPageProps = {
  categories: SearchItemsResult['categories']
  items: SearchItemsResult['items']
}
