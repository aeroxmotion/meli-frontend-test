import path from 'path'
import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  preset: 'jest-playwright-preset',
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  roots: [path.resolve(__dirname, './__test__/ui')],
  setupFilesAfterEnv: ['expect-playwright']
}

export default config
