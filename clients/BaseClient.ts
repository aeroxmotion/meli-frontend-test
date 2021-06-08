import ky from 'ky-universal'

import { Ky } from './sharedTypes'

/**
 * Cliente base - Del que todos los (sub-)clientes deberían heredar
 */
export abstract class BaseClient {
  private _client: Ky | null = null

  constructor(protected baseUrl: string) {
    this._client = ky.extend({
      prefixUrl: baseUrl
    })
  }

  async get<T>(...args: Parameters<Ky['get']>): Promise<T> {
    // Seems like `this._client.get(...).json() isn't working
    const response = await this._client!.get(...args)

    return response.json()
  }

  /**
   * Retorna los items filtrados por el parámetro `query`
   *
   * @param query
   */
  abstract searchItems(query: string): any

  /**
   * Retorna la información del item por `id`
   *
   * @param id
   */
  abstract getItemInfo(id: string): any
}
