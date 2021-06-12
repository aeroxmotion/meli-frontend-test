import type {
  MeLiItemCategories,
  MeLiItemInfo
} from '../../../../clients/MeLiClient'
import type { ItemResult } from '../../../../clients/ProxyClient'
import author from '../../author'

const FORMAT_DESCRIPTION_REGEX = /\n/g

export function transformMeLiItemInfo(
  itemInfo: MeLiItemInfo,
  missingCategories: MeLiItemCategories['path_from_root'],
  missingDescription: string
): ItemResult {
  return {
    author,
    item: {
      id: itemInfo.id,
      title: itemInfo.title,
      price: {
        currency: itemInfo.currency_id,
        amount: Math.trunc(itemInfo.price),
        decimals: parseInt(itemInfo.price.toString().split('.')[1]) || 0
      },
      categories: missingCategories.map(category => category.name),
      condition: itemInfo.condition,
      picture: itemInfo.pictures[0].secure_url,
      free_shipping: itemInfo.shipping.free_shipping,
      description: formatMissingDescription(missingDescription),
      sold_quantity: itemInfo.sold_quantity
    }
  }
}

function formatMissingDescription(description: string) {
  return description.replace(FORMAT_DESCRIPTION_REGEX, '<br>')
}
