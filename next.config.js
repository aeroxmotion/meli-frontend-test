// @ts-check
const path = require('path')

/**
 * TODO: Find next config types
 *
 * @type {*}
 */
module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.resolve(__dirname, './styles')]
  },
  pageExtensions: ['page.tsx', 'api.ts']
}
