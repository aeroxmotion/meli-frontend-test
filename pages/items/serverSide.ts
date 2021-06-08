import { GetServerSideProps } from 'next'

import { ProxyClient } from '../../clients/ProxyClient'
import { ItemsPageProps } from './types'

export const getServerSideProps: GetServerSideProps<ItemsPageProps> = async ({
  req,
  query
}) => {
  let items: ItemsPageProps['items'] = []
  let categories: ItemsPageProps['categories'] = []

  try {
    const proxyClient = new ProxyClient(req)

    ;({ items, categories } = await proxyClient.searchItems(
      query.search as string
    ))
  } catch (error) {
    console.log('Error while fetching items:', error)
  }

  if (!items.length) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      items,
      categories
    }
  }
}
