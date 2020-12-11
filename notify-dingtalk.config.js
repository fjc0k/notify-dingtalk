const { defineConfig } = require('./lib')
const { dedent } = require('vtils')

module.exports = [
  defineConfig({
    title: '通知',
    content: dedent`
      # 通知

      ---

      我们在一起

      ![](https://cdn.jsdelivr.net/gh/fjc0k/placekitten/images/400/200.jpg)

      > 猫！

      ---

      [查看详情](https://baidu.com)
    `,
    at: 'all',
  }),
  defineConfig({
    title: '通知2',
    content: dedent`
      # 通知

      ---

      我们在一起

      ---

      [百度](https://baidu.com)
    `,
  }),
]
