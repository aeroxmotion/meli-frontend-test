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

export type MeLiSearchCategoryFilterSegment = {
  id: string
  name: string
}

export type MeLiSearchCategoryFilter = {
  id: string
  name: string
  path_from_root: MeLiSearchCategoryFilterSegment[]
}

export type MeLiSearchFilter<Value> = {
  id: 'category' /* | etc. We don't care */
  values: Value[]
}

export type MeLiSearchAvailableFilter = {
  id: string
  name: string
  results: number
}

export type MeLiSearchResults = {
  results: MeLiSearchResult[]
  filters: MeLiSearchFilter<MeLiSearchCategoryFilter>[]
  available_filters: MeLiSearchFilter<MeLiSearchAvailableFilter>[]
}

export type MeLiItemInfo = {
  id: string
  title: string
  price: number
  currency_id: string
  pictures: Array<{
    secure_url: string
  }>
  category_id: string
  condition: string
  shipping: {
    free_shipping: boolean
  }
  sold_quantity: number
}

export type MeLiItemDescription = {
  plain_text: string
}

export type MeLiItemCategory = {
  id: string
  name: string
}

export type MeLiItemCategories = {
  id: string
  name: string
  path_from_root: MeLiItemCategory[]
}
