import type {
  MeLiSearchAvailableFilter,
  MeLiSearchCategoryFilter,
  MeLiSearchFilter,
  MeLiSearchResults
} from '../../../clients/MeLiClient'
import type { SearchItemsResult } from '../../../clients/ProxyClient'
import author from '../author'

const MAX_CATEGORIES_PER_SEARCH = 5
const FILTER_QUERY_ID: MeLiSearchFilter<any>['id'] = 'category'

const categoriesMapper = (
  ...allFilters: MeLiSearchFilter<
    MeLiSearchAvailableFilter | MeLiSearchCategoryFilter
  >[][]
): SearchItemsResult['categories'] => {
  for (const filters of allFilters) {
    const categoryFilter = filters.find(({ id }) => id === FILTER_QUERY_ID)

    if (categoryFilter && categoryFilter.values.length) {
      const [value] = categoryFilter.values
      const values =
        'path_from_root' in value ? value.path_from_root : categoryFilter.values

      return values.slice(0, MAX_CATEGORIES_PER_SEARCH).map(({ name }) => name)
    }
  }

  return []
}

export function transformMeLiSearchResults({
  results,
  filters,
  available_filters
}: MeLiSearchResults): SearchItemsResult {
  const categories: SearchItemsResult['categories'] = categoriesMapper(
    filters,
    available_filters
  )

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
