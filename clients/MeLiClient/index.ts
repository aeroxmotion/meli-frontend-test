import ky from 'ky-universal'

import config from '../../config'
import { BaseClient } from '../BaseClient'
import type {
  MeLiSearchResults,
  MeLiSearchResult,
  MeLiItemInfo,
  MeLiItemDescription
} from './types'

// Expose types
export * from './types'

/**
 * Máxima cantidad de items a consultar
 */
const SEARCH_ITEMS_LIMIT = 4

/**
 * Cliente para realizar consultas al API de MercadoLibre
 */
class MeLiClient extends BaseClient {
  constructor() {
    super(config.api.MELI_API_URL)
  }

  searchItems(query: string) {
    return this.get<MeLiSearchResults>('sites/MLA/search', {
      searchParams: {
        q: query,
        limit: SEARCH_ITEMS_LIMIT
      }
    })
  }

  getItemInfo(id: MeLiSearchResult['id']) {
    return this.get<MeLiItemInfo>(`items/${id}`)
  }

  /**
   * Obtiene la descripción relacionada al `id`
   * del item especificado
   *
   * @param id
   */
  async getItemDescription(
    id: MeLiItemInfo['id']
  ): Promise<MeLiItemDescription> {
    try {
      return await this.get<MeLiItemDescription>(`items/${id}/description`)
    } catch (error) {
      if (!(error instanceof ky.HTTPError) || error.response.status !== 404) {
        throw error
      }

      return {
        plain_text: 'Producto sin descripción'
      }
    }
  }
}

export const meLiClient = new MeLiClient()
