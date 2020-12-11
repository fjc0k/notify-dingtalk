import { send } from './send'
import type { SendOptions } from './send'

function defineConfig(config: SendOptions): SendOptions {
  return config
}

export { send, defineConfig }
export type { SendOptions }
