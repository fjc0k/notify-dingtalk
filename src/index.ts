import { SendOptions } from './send'

export function defineConfig(config: SendOptions): SendOptions {
  return config
}

// @index(['./*.ts', '!./cli.ts', '!**/*.test.*'], f => `export * from '${f.path}'`)
export * from './getLatestConventionalChangelog'
export * from './send'
// @endindex
