#!/usr/bin/env node
import fs from 'fs'
import ora from 'ora'
import { castArray } from 'vtils'
import { join } from 'path'
import { send, SendOptions } from './send'

const configFile = join(process.cwd(), 'notify-dingtalk.config.js')
if (!fs.existsSync(configFile)) {
  throw new Error(`未找到配置文件：${configFile}`)
}

const config: SendOptions[] = castArray(
  require(configFile).default || require(configFile),
)

if (config.length) {
  const spinner = ora(`${config.length} 个通知发送中`).start()
  Promise.all(
    config.map(sendOptions => {
      return send(sendOptions)
    }),
  )
    .then(() => {
      spinner.succeed(`已发送 ${config.length} 个通知`)
    })
    .catch(err => {
      spinner.fail(String(err))
    })
}
