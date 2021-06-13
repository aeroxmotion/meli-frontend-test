import { GetServerSideProps } from 'next'

import { ProxyClient } from '../../clients/ProxyClient'
import { ItemsPageProps } from './types'

export const getServerSideProps: GetServerSideProps<ItemsPageProps> = async ({
  req,
  query: { search }
}) => {
  let items: ItemsPageProps['items'] = []
  let categories: ItemsPageProps['categories'] = []

  const searchText = Array.isArray(search) ? search[0] : search

  if (searchText) {
    try {
      const proxyClient = new ProxyClient(req)

      ;({ items, categories } = await proxyClient.searchItems(searchText))
    } catch (error) {
      console.log('Error while fetching items:', error)
    }
  }

  return {
    props: {
      items,
      categories
    }
  }
}
