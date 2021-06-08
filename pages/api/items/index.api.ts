import type { NextApiHandler } from 'next'

import { meLiClient } from '../../../clients/MeLiClient'
import { SearchItemsResult } from '../../../clients/ProxyClient'
import { transformMeLiSearchResults } from './transform'

const searchItemsHandler: NextApiHandler<SearchItemsResult | {}> = async (
  req,
  res
) => {
  try {
    const searchResults = await meLiClient.searchItems(req.query.q as string)
    const transformedResult = transformMeLiSearchResults(searchResults)

    res.status(200).json(transformedResult)
  } catch (error) {
    console.log('Error searching items:', error)

    res.status(500).json({})
  }
}

export default searchItemsHandler
