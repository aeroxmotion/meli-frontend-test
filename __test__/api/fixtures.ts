import ky from 'ky-universal'
import listen from 'test-listen'
import type { NextApiHandler } from 'next'
import { createServer } from 'http'
import { parse as parseUrl } from 'url'
import { apiResolver } from 'next/dist/next-server/server/api-utils'

// Inspired by: https://github.com/Xunnamius/next-test-api-route-handler/blob/main/src/index.ts
export async function testApiHandler<R = any>(
  handler: NextApiHandler,
  params: Record<string, any>
) {
  const server = createServer((req, res) =>
    apiResolver(
      req,
      res,
      { ...parseUrl(req.url ?? '', true).query, ...params },
      handler,
      void 0 as any,
      true,
      void 0 as any
    )
  )

  const localUrl = await listen(server)
  const response = await ky(localUrl)

  server.close()

  return {
    response: response.clone(),
    result: (await response.json()) as R
  }
}
