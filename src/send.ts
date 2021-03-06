import crypto from 'crypto'
import got from 'got'

export interface SendOptions {
  /**
   * 访问口令。
   *
   * @default process.env.D_ACCESS_TOKEN
   */
  accessToken?: string

  /**
   * 访问密钥。
   *
   * @default process.env.D_SECRET
   */
  secret?: string

  /**
   * 通知标题。
   */
  title: string

  /**
   * 通知内容，Markdown 格式。
   */
  content: string

  /**
   * 要提醒的人员，设为 `all` 表示 @ 所有人，设为手机号数组只 @ 指定人。
   */
  at?: 'all' | string[]
}

/**
 * @see https://ding-doc.dingtalk.com/doc#/serverapi2/qf2nxq/9e91d73c
 */
export async function send({
  accessToken = process.env.D_ACCESS_TOKEN,
  secret = process.env.D_SECRET,
  title,
  content,
  at,
}: SendOptions) {
  if (!accessToken) {
    throw new Error('accessToken 不能为空')
  }

  if (!secret) {
    throw new Error('secret 不能为空')
  }

  const timestamp = Date.now()
  const sign = crypto
    .createHmac('sha256', secret)
    .update(`${timestamp}\n${secret}`)
    .digest('base64')
  const data = {
    msgtype: 'markdown',
    markdown: {
      title: title,
      text: content,
    },
    at: {
      atMobiles: Array.isArray(at) ? at : [],
      isAtAll: at === 'all',
    },
  }
  if (!data.at.isAtAll && data.at.atMobiles.length) {
    const atMobiles: string[] = data.at.atMobiles.filter(
      mobile => !data.markdown.text.includes(`@${mobile}`),
    )
    if (atMobiles.length) {
      const atMobilesText = atMobiles.map(mobile => `@${mobile}`).join(' ')
      data.markdown.text += `<!-- ${atMobilesText} -->`
    }
  }
  const { body } = await got.post<{
    errcode: number
    errmsg: string
  }>('https://oapi.dingtalk.com/robot/send', {
    responseType: 'json',
    searchParams: {
      access_token: accessToken,
      timestamp: timestamp,
      sign: sign,
    },
    json: data,
  })

  if (body.errcode !== 0) {
    throw new Error(`[notify-dingtalk@send] ${body.errmsg}`)
  }

  return body
}
