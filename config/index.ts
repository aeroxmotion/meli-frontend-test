const config = {
  api: {
    MELI_API_URL: process.env.MELI_API_URL ?? 'https://api.mercadolibre.com',
    PROXY_PATH: process.env.PROXY_PATH ?? '/api'
  },
  images: {
    RESOLVE_PATH: '/assets/img'
  }
}

export default config
