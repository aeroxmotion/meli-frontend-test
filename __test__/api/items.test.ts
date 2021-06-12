import { testApiHandler } from './fixtures'
import type {
  SearchItem,
  SearchItemsResult,
  ItemResult,
  ItemInfo,
  SearchItemCategory
} from '../../clients/ProxyClient'
import author from '../../pages/api/author'
import searchItemsHandler from '../../pages/api/items/index.api'
import getItemInfoHandler from '../../pages/api/items/[id]/index.api'

/**
 * Texto de búsqueda de prueba
 */
const TEST_QUERY = 'test'

/**
 * Identificador de prueba al consultar
 * un item en específico
 */
const TEST_ID = 'MLA859496798'

const itemShape: ItemInfo = {
  id: expect.any(String),
  title: expect.any(String),
  price: expect.objectContaining({
    currency: expect.any(String),
    amount: expect.any(Number),
    decimals: expect.any(Number)
  }),
  picture: expect.any(String),
  condition: expect.any(String),
  free_shipping: expect.any(Boolean)
}

describe('e2e /api/items', () => {
  test('GET /?q=:query', async () => {
    expect.hasAssertions()

    const { response, result } = await testApiHandler<SearchItemsResult>(
      searchItemsHandler,
      {
        q: TEST_QUERY
      }
    )

    expect(response.ok).toBe(true)

    expect(result.author).toEqual(author)
    expect(result.categories).toEqual(
      expect.arrayContaining<SearchItemCategory[]>([expect.any(String)])
    )
    expect(result.items).toEqual(
      expect.arrayContaining<SearchItem[]>([
        expect.objectContaining<SearchItem>({
          ...itemShape,
          city: expect.any(String)
        })
      ])
    )
  })

  test('GET /:id', async () => {
    expect.hasAssertions()

    const { response, result } = await testApiHandler<ItemResult>(
      getItemInfoHandler,
      {
        id: TEST_ID
      }
    )

    expect(response.ok).toBe(true)

    expect(result.author).toEqual(author)
    expect(result.item).toEqual(
      expect.objectContaining<ItemResult['item']>({
        ...itemShape,
        sold_quantity: expect.any(Number),
        description: expect.any(String),
        categories: expect.arrayContaining([expect.any(String)])
      })
    )
  })
})
