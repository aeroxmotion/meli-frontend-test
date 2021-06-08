import type {
  MeLiSearchFilter,
  MeLiSearchResults
} from '../../../clients/MeLiClient'
import type { SearchItemsResult } from '../../../clients/ProxyClient'
import author from '../author'

const MAX_CATEGORIES_PER_SEARCH = 3
const FILTER_QUERY_ID: MeLiSearchFilter['id'] = 'category'

export function transformMeLiSearchResults({
  results,
  available_filters
}: MeLiSearchResults): SearchItemsResult {
  let categories: SearchItemsResult['categories'] = []
  const categoryFilter = available_filters.find(
    ({ id }) => id === FILTER_QUERY_ID
  )

  if (categoryFilter) {
    categories = categoryFilter.values
      .slice(0, MAX_CATEGORIES_PER_SEARCH)
      .map(({ name }) => name)
  }

  return {
    author,
    categories,
    items: results.map(({ price, currency_id, address, ...result }) => ({
      id: result.id,
      title: result.title,
      price: {
        currency: currency_id,
        amount: Math.trunc(price),
        decimals: parseInt(price.toString().split('.')[1]) || 0
      },
      city: address.city_name,
      picture: getSecureThumbnailURL(result.thumbnail),
      condition: result.condition,
      free_shipping: result.shipping.free_shipping
    }))
  }
}

/**
 * Convierte la URL del thumbnail para que use
 * el esquema `https`
 *
 * @param thumbnail
 */
function getSecureThumbnailURL(thumbnail: string) {
  return thumbnail.replace(/^http/, '$&s')
}
