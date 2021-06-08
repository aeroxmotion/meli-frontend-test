import path from 'path'
import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: [path.resolve(__dirname, './__test__/api')]
}

export default config
