import getNextAbsoluteURL from 'next-absolute-url'
import type { IncomingMessage } from 'http'

import config from '../../config'
import { BaseClient } from '../BaseClient'
import { ItemResult, SearchItem, SearchItemsResult } from './types'

// Expose types
export * from './types'

/**
 * Cliente encargado de consultar el API proxy de MercadoLibre
 */
export class ProxyClient extends BaseClient {
  constructor(req: IncomingMessage) {
    super(getNextAbsoluteURL(req).origin + config.api.PROXY_PATH)
  }

  searchItems(query: string) {
    return this.get<SearchItemsResult>('items', {
      searchParams: {
        q: query
      }
    })
  }

  getItemInfo(id: SearchItem['id']) {
    return this.get<ItemResult>(`items/${id}`)
  }
}
