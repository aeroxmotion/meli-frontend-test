/**
 * User who performs the query
 */
export type Author = {
  name: string
  lastname: string
}

export type ItemInfo = {
  id: string
  title: string
  price: {
    currency: string
    amount: number
    decimals: number
  }
  picture: string
  condition: string
  free_shipping: boolean
}

export type SearchItemCategory = string
export type SearchItem = ItemInfo & { city: string }

export type SearchItemsResult = {
  author: Author
  categories: SearchItemCategory[]
  items: SearchItem[]
}

export type ItemResult = {
  author: Author
  item: ItemInfo & {
    sold_quantity: number
    description: string
  }
}
