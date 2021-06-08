import type {
  ItemResult,
  SearchItemsResult
} from '../../../clients/ProxyClient'

export type ItemInfoPageProps = {
  item: ItemResult['item']
  categories: SearchItemsResult['categories']
}
