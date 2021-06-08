import { GetServerSideProps } from 'next'
import { ItemResult, ProxyClient } from '../../../clients/ProxyClient'
import { ItemInfoPageProps } from './types'

export const getServerSideProps: GetServerSideProps<ItemInfoPageProps> = async ({
  req,
  params = {}
}) => {
  let item: ItemResult['item'] | null = null

  try {
    const proxyClient = new ProxyClient(req)

    ;({ item } = await proxyClient.getItemInfo(params.id as string))
  } catch (error) {
    console.log('Error while fetching item info:', error)
  }

  if (!item) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      item,
      // TODO: Where to get categories?
      categories: []
    }
  }
}
