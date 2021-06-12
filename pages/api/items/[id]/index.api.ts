import type { NextApiHandler } from 'next'

import { meLiClient } from '../../../../clients/MeLiClient'
import { ItemResult } from '../../../../clients/ProxyClient'
import { transformMeLiItemInfo } from './transform'

const getItemInfoHandler: NextApiHandler<ItemResult | {}> = async (
  req,
  res
) => {
  try {
    const itemId = req.query.id as string

    const [itemInfo, description] = await Promise.all([
      meLiClient.getItemInfo(itemId),
      meLiClient.getItemDescription(itemId)
    ])

    const categories = await meLiClient.getItemCategories(itemInfo.category_id)

    const transformedResult = transformMeLiItemInfo(
      itemInfo,
      categories.path_from_root,
      description.plain_text
    )

    res.status(200).json(transformedResult)
  } catch (error) {
    console.log('Error while fetching item info:', error)

    res.status(500).json({})
  }
}

export default getItemInfoHandler
