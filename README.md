# notify-dingtalk

钉钉群 Markdown 消息通知。

## 安装

```bash
npm i notify-dingtalk -D
```

国内推荐使用 [tbify](https://github.com/fjc0k/tbify) 加速。

## 使用

在项目根目录创建配置文件 `notify-dingtalk.config.js`，然后导出配置即可：

```javascript
const { defineConfig } = require('notify-dingtalk')

module.exports = defineConfig({
  accessToken: 'xxx',
  secret: 'xxx',
  title: '发布通知',
  content: '**优化**: 添加属性',
})
```

如果要通知到多个群，导出一个数组即可：

```javascript
const { defineConfig } = require('notify-dingtalk')

module.exports = [
  defineConfig({
    accessToken: 'xxx',
    secret: 'xxx',
    title: '发布通知',
    content: '**优化**: 添加属性',
  }),
  defineConfig({
    accessToken: 'xxx2',
    secret: 'xxx2',
    title: '发布通知',
    content: '**优化**: 添加属性',
  }),
]
```

其中 `accessToken`、`secret` 也可以不用显式指定，而是分别通过环境变量 `D_ACCESS_TOKEN`、`D_SECRET` 设置。

最后，执行以下命令发送通知到钉钉群：

```bash
npx notify-dingtalk
```

效果如下：

<img src="https://raw.githubusercontent.com/fjc0k/notify-dingtalk/master/preview.png" width="400" />

### 一个更符合实际项目的示例

如果你的更新日志是采用 [conventional-changelog](https://github.com/conventional-changelog/conventional-changelog) 生成的，可使用包提供的 `getLatestConventionalChangelog` 方法获取最新的更新日志。

```javascript
const {
  defineConfig,
  getLatestConventionalChangelog,
} = require('notify-dingtalk')
const { dedent } = require('vtils')

module.exports = defineConfig({
  accessToken: '******',
  secret: '******',
  title: '发布公告',
  content: dedent`
    # 发布公告

    ---

    ${getLatestConventionalChangelog('./CHANGELOG.md')}

    ---

    [进入主页→](https://github.com/fjc0k/notify-dingtalk)
  `,
})
```

## 许可

MIT (c) Jay Fong
