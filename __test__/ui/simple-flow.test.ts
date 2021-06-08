const ROOT_URL = 'http://localhost:3000'
const SEARCH_VALUE = 'ABC'
const EXPECTED_SEARCH_ITEMS = 4
const EXPECTED_SEARCH_CATEGORIES = 3
const SEARCH_ITEM_URL_REGEX = new RegExp(`^${ROOT_URL}/items/MLA\\d+$`)
const ITEM_CONDITION_REGEX = /^\s*(?:Nuevo|Usado) - \d+ vendidos\s*$/
const ITEM_PRICE_HTML_REGEX = /^\$ \d+.+?<sup>\d{2,2}<\/sup>$/m
const NON_EMPTY_CONTENT_REGEX = /\w/

describe('e2e UI simple flow', () => {
  test('home page', async () => {
    await page.goto(ROOT_URL, { timeout: 60000 })

    await expect(page).toHaveText(
      '[data-test=empty-search]',
      'Aún no has realizado ninguna búsqueda'
    )
  })

  test('search items', async () => {
    await page.fill('[data-test=search-input]', SEARCH_VALUE)
    await page.click('[data-test=search-btn]')
    await page.waitForNavigation()

    // Assert correct URL
    expect(page.url()).toBe(`${ROOT_URL}/items?search=${SEARCH_VALUE}`)

    const searchItems = await page.$$('[data-test=search-item]')
    const searchCategories = await page.$$('[data-test=search-breadcrumb]')

    expect(searchItems.length).toBe(EXPECTED_SEARCH_ITEMS)
    expect(searchCategories.length).toBe(EXPECTED_SEARCH_CATEGORIES)
  })

  test('item info', async () => {
    await page.click('[data-test=search-item]')
    await page.waitForNavigation()

    expect(page.url()).toMatch(SEARCH_ITEM_URL_REGEX)

    const itemPicture = await page.$('[data-test=item-picture]')

    // Assert item picture to be present
    expect(itemPicture).not.toBe(null)

    const itemCondition = await page.$('[data-test=item-condition]')

    // Assert item condition to be present
    expect(itemCondition).not.toBe(null)

    await expect(itemCondition!.textContent()).resolves.toMatch(
      ITEM_CONDITION_REGEX
    )

    const itemTitle = await page.$('[data-test=item-title]')

    // Assert item title to be present
    expect(itemTitle).not.toBe(null)

    // Assert item title content
    await expect(itemTitle!.textContent()).resolves.toMatch(
      NON_EMPTY_CONTENT_REGEX
    )

    const itemPrice = await page.$('[data-test=item-price]')

    // Assert item title to be present
    expect(itemPrice).not.toBe(null)

    // Assert item price content
    await expect(itemPrice!.innerHTML()).resolves.toMatch(ITEM_PRICE_HTML_REGEX)

    const itemBuyBtn = await page.$('[data-test=item-buy-btn]')

    // Assert item buy button to be present
    expect(itemBuyBtn).not.toBe(null)

    // Assert item buy button content
    await expect(itemBuyBtn!.textContent()).resolves.toBe('Comprar')

    const itemDescriptionTitle = await page.$(
      '[data-test=item-description-title]'
    )

    // Assert item description title to be present
    expect(itemDescriptionTitle).not.toBe(null)

    // Assert item descripion title content
    await expect(itemDescriptionTitle!.textContent()).resolves.toBe(
      'Descripción del producto'
    )

    const itemDescription = await page.$('[data-test=item-description]')

    // Assert item description to be present
    expect(itemDescription).not.toBe(null)

    // Assert item descripion content
    await expect(itemDescription!.textContent()).resolves.toMatch(
      NON_EMPTY_CONTENT_REGEX
    )
  })
})

// Workaround for TS error: 'All files must be modules when the '--isolatedModules' flag is provided.'
export {}
