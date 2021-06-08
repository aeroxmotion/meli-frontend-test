// TODO: An script can extract all of these types
// Types (just what we need) extracted from:
// https://api.mercadolibre.com/sites/MLA/search?q=:query#json
export type MeLiSearchResult = {
  id: string
  title: string
  price: number
  currency_id: string
  condition: string
  thumbnail: string
  address: {
    city_name: string
  }
  shipping: {
    free_shipping: boolean
  }
}

export type MeLiSearchCategoryFilter = {
  id: string
  name: string
}

export type MeLiSearchFilter = {
  id: 'category' /* | etc. We don't care */
  values: Array<MeLiSearchCategoryFilter>
}

export type MeLiSearchResults = {
  results: Array<MeLiSearchResult>
  available_filters: Array<MeLiSearchFilter>
}

export type MeLiItemInfo = {
  id: string
  title: string
  price: number
  currency_id: string
  pictures: Array<{
    secure_url: string
  }>
  condition: string
  shipping: {
    free_shipping: boolean
  }
  sold_quantity: number
}

export type MeLiItemDescription = {
  plain_text: string
}
