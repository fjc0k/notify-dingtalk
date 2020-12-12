# 更新日志

## [1.10.0-beta5](http://foo.bar/pull-requests?create&targetBranch=refs%2Ftags%2Fv1.9.0&sourceBranch=refs%2Ftags%2Fv1.10.0) (2020-12-11)

### 特性

- 重构地址选择器、类目选择器等级联选择器以支持回显，所有级联选择器的绑定值现在都是选中最后一级的值 ([2726e09](http://foo.bar/commits/2726e098a113c7215329c8bdba5890caf921e737))

### 修复

- 解决控制台总是报属性缺失的问题 ([c29d1a6](http://foo.bar/commits/c29d1a65db6f993084578c3ab2195d13e5f65609))

## [1.9.0](http://foo.bar/pull-requests?create&targetBranch=refs%2Ftags%2Fv1.8.0&sourceBranch=refs%2Ftags%2Fv1.9.0) (2020-12-11)

### 修复

- **useApi:** 初始不发起请求时将 loading 设为 false ([76ca83c](http://foo.bar/commits/76ca83c3adf2fceb5b5054aa66ed00f565bc7c11))

### 特性

- **维护日志:** 与具体接口脱钩，通过 service 由使用者自行提供数据 ([35040ee](http://foo.bar/commits/35040ee54858de2b21ac2e738d96d972bd28df47))

## [1.8.0](http://foo.bar/pull-requests?create&targetBranch=refs%2Ftags%2Fv1.7.0&sourceBranch=refs%2Ftags%2Fv1.8.0) (2020-12-10)

### 特性

- **useApi:** 可返回空参数阻止发起请求 ([7b33803](http://foo.bar/commits/7b33803d157e77c97bc72ce8e54d6e4242720e11))
- **维护管理器:** 改写为纯组件，不参与接口交互 ([e8bb2aa](http://foo.bar/commits/e8bb2aadea6723fbe8011aa03bb404166aad724c))

## [1.7.0](http://foo.bar/pull-requests?create&targetBranch=refs%2Ftags%2Fv1.6.0&sourceBranch=refs%2Ftags%2Fv1.7.0) (2020-12-10)

### 特性

- **人员选择器:** 同时兼容数字类型、字符串类型的 ID ([98e393d](http://foo.bar/commits/98e393d64f59a0744c864f3e0a8f570c27848ec3))

## [1.6.0](http://foo.bar/pull-requests?create&targetBranch=refs%2Ftags%2Fv1.5.1&sourceBranch=refs%2Ftags%2Fv1.6.0) (2020-12-10)

### 特性

- **applyModel:** 支持 transformer ([a427f77](http://foo.bar/commits/a427f7768c52fe06b7674fa93cb6357199ef61bb))

### [1.5.1](http://foo.bar/pull-requests?create&targetBranch=refs%2Ftags%2Fv1.5.0&sourceBranch=refs%2Ftags%2Fv1.5.1) (2020-12-09)

### 修复

- **applyModel:** 不为数组 ([a764fee](http://foo.bar/commits/a764fee3f02e94ceeddf631a0e37d357a0b641e2))

## [1.5.0](http://foo.bar/pull-requests?create&targetBranch=refs%2Ftags%2Fv1.4.0&sourceBranch=refs%2Ftags%2Fv1.5.0) (2020-12-08)

### 特性

- **物料选择器:** 封装图片物料选择器 ([59c5a3b](http://foo.bar/commits/59c5a3b286d126136e82f409b466b40149e91557))

## [1.4.0](http://foo.bar/pull-requests?create&targetBranch=refs%2Ftags%2Fv1.3.0&sourceBranch=refs%2Ftags%2Fv1.4.0) (2020-12-07)

### 特性

- **文件选择器:** 增加上传提示 ([29dbc32](http://foo.bar/commits/29dbc327d92543e706dc65b9ead8e0bab979af2d))
- **组件:** 新增 SingleFilePicker 单文件选择器 ([5e3af74](http://foo.bar/commits/5e3af745f29904fdd57cde3823ca6659550c7ad0))

## [1.3.0](http://foo.bar/pull-requests?create&targetBranch=refs%2Ftags%2Fv1.2.0&sourceBranch=refs%2Ftags%2Fv1.3.0) (2020-12-07)

### 特性

- **人员选择器:** value 支持包含 ID 的对象列表 ([e8d741d](http://foo.bar/commits/e8d741d267276cc6ed821bd8a6f81598931addf8))
- **单图选择器:** 新增 maxSize 支持设置最大可选择的图片 ([5122b21](http://foo.bar/commits/5122b217cdd9d00dbf913ff8af8c9d0289aa6e00))
- **弹窗:** 渲染到 body 下，避免样式污染 ([cc783ed](http://foo.bar/commits/cc783ed90dd5d281e45c3fbf045ff3e466d887fc))

### 修复

- **人员选择器:** 强制将 value 更新为对象数组 ([2f1c0f6](http://foo.bar/commits/2f1c0f666172515c19f222e15467fbd013dbb553))

## [1.2.0](http://foo.bar/pull-requests?create&targetBranch=refs%2Ftags%2Fv1.1.0&sourceBranch=refs%2Ftags%2Fv1.2.0) (2020-12-05)

### 特性

- **组件:** 新增 MaintenanceLog 维护日志 ([e084bad](http://foo.bar/commits/e084bad10b37a9cd9556bac4a553de6f8c92e343))

## [1.1.0](http://foo.bar/pull-requests?create&targetBranch=refs%2Ftags%2Fv1.0.0&sourceBranch=refs%2Ftags%2Fv1.1.0) (2020-12-05)

### 特性

- **人员选择器:** 添加全部分类；实现易用的表单项组件 ([aba1612](http://foo.bar/commits/aba161227e4b3a5472bd31e4d9384738815467bc))
- **组件:** 新增 PickTrigger 选择触发器 ([3f4ee85](http://foo.bar/commits/3f4ee852e13a23c4790d0c6273e736f76c11bc91))
- **组件:** 新增 SingleImagePicker 单图选择器 ([f0e30e0](http://foo.bar/commits/f0e30e06c9caec46ff4a59e8a836a935ae05b234))

## [1.0.0](http://foo.bar/pull-requests?create&targetBranch=refs%2Ftags%2Fv0.0.20&sourceBranch=refs%2Ftags%2Fv1.0.0) (2020-12-03)

### 特性

- **链接预览器:** 新增 iosUrl、androidUrl、webUrl 以分别设置各自链接 ([cf2d963](http://foo.bar/commits/cf2d963cc3f07a0c39d885fb9dc12b336b50f8b7))

### [0.0.20](http://foo.bar/pull-requests?create&targetBranch=refs%2Ftags%2Fv0.0.19&sourceBranch=refs%2Ftags%2Fv0.0.20) (2020-12-02)

### 特性

- **地址选择器:** 新增 filterProvince 属性过滤省份以支持仅贵州省等限定省份的需求 ([f8419ce](http://foo.bar/commits/f8419ce578164de8cc1355186c6e20f7203119b1))
- **链接预览器:** 每个链接都显示二维码 ([f9c17cd](http://foo.bar/commits/f9c17cd5306d4641122d013276a14c33982f97bb))

### [0.0.19](http://foo.bar/pull-requests?create&targetBranch=refs%2Ftags%2Fv0.0.18&sourceBranch=refs%2Ftags%2Fv0.0.19) (2020-12-01)

### 特性

- 增加多选无限相关说明，优化无限时计数器展示效果 ([1a788c7](http://foo.bar/commits/1a788c7585da128f2037158712b7451df26bc2e4))

### [0.0.18](http://foo.bar/pull-requests?create&targetBranch=refs%2Ftags%2Fv0.0.17&sourceBranch=refs%2Ftags%2Fv0.0.18) (2020-12-01)

### 特性

- **组件:** 新增 Qrcode 二维码组件 ([af924f8](http://foo.bar/commits/af924f8646116f4e03c6b8a652bab388272072ac))

### [0.0.17](http://foo.bar/pull-requests?create&targetBranch=refs%2Ftags%2Fv0.0.16&sourceBranch=refs%2Ftags%2Fv0.0.17) (2020-12-01)

### 修复

- 导出修复 ([557364a](http://foo.bar/commits/557364a04a1ef64673a357840ebe79d43d924219))

### [0.0.16](http://foo.bar/pull-requests?create&targetBranch=refs%2Ftags%2Fv0.0.15&sourceBranch=refs%2Ftags%2Fv0.0.16) (2020-11-30)

### 特性

- 导出 utils、hooks ([abed893](http://foo.bar/commits/abed8938b3608d18db0be4ee43f2c8c954da03d6))

### [0.0.15](http://foo.bar/pull-requests?create&targetBranch=refs%2Ftags%2Fv0.0.14&sourceBranch=refs%2Ftags%2Fv0.0.15) (2020-11-30)

### 修复

- 应编译 tsx 文件 ([42044ad](http://foo.bar/commits/42044ad225c084fae719b813735d5d0d29abbbe8))

### [0.0.14](http://foo.bar/pull-requests?create&targetBranch=refs%2Ftags%2Fv0.0.13&sourceBranch=refs%2Ftags%2Fv0.0.14) (2020-11-30)

### 修复

- **物料选择器:** 分页起始为 1 ([3be4944](http://foo.bar/commits/3be49449af590d0c8d3c07f70447ff8016f065c3))

### 特性

- **人员选择器:** 接口对接完成 ([280410a](http://foo.bar/commits/280410a70d0e4164d51aa9203633e89afaf3514b))

### [0.0.13](http://foo.bar/pull-requests?create&targetBranch=refs%2Ftags%2Fv0.0.12&sourceBranch=refs%2Ftags%2Fv0.0.13) (2020-11-27)

### 特性

- **地址选择器:** 四级 -> 三级 ([20f2600](http://foo.bar/commits/20f26000557e8a6ef283f57ebe5fd490a1cfa7f4))
- **地址选择器:** 接口对接完成 ([5de5fd1](http://foo.bar/commits/5de5fd193e00df141f91f778c8b1ab0b9a12fb98))
- **地址选择器:** 新增属性 level 级别支持特定级别地址选取 ([a77c54e](http://foo.bar/commits/a77c54e761e1d359f3bc1fa10092fddd67b21ce5))
- **级联选择器、地址选择器、类目选择器:** 封装表单项组件方便使用 ([39c6e5a](http://foo.bar/commits/39c6e5ad7eb63595588001849c8996f4291b1e60))
- **统一请求函数:** 支持超时、出错重试 ([138acd1](http://foo.bar/commits/138acd1c109010c52e9f12d3e5a1de61fbdb9f18))
- **角色选择器:** 封装表单项组件 ([233921c](http://foo.bar/commits/233921c722a65a9ea1071720e0e6a8b784ee1adc))

### [0.0.12](http://foo.bar/pull-requests?create&targetBranch=refs%2Ftags%2Fv0.0.11&sourceBranch=refs%2Ftags%2Fv0.0.12) (2020-11-26)

### 修复

- **级联选择器:** 修复单选搜索点击逻辑错误 ([624e298](http://foo.bar/commits/624e298b6d58cbc0ae443e4fefa7ca036fc4ccc5))

### [0.0.11](http://foo.bar/pull-requests?create&targetBranch=refs%2Ftags%2Fv0.0.10&sourceBranch=refs%2Ftags%2Fv0.0.11) (2020-11-25)

### 特性

- **类目选择器:** 接口对接完成 ([b3cc6f1](http://foo.bar/commits/b3cc6f158908cc8ce4a559c39f0eabb9f4b941a0))
- **级联选择器:** 新增 loading 是否加载状态属性 ([a859b06](http://foo.bar/commits/a859b06bfa4d386f172e1b765f14b78efed5407c))
- 升级 yapi-to-typescript 以直接使用 Swagger 作为代码生成器服务地址 ([a3e6586](http://foo.bar/commits/a3e65864bf686e50d4d9d99459fbc10bfeb55ad9))

### [0.0.10](http://foo.bar/pull-requests?create&targetBranch=refs%2Ftags%2Fv0.0.9&sourceBranch=refs%2Ftags%2Fv0.0.10) (2020-11-24)

### 特性

- **地址选择器、类目选择器:** 演示添加单选、多选 ([90d5a64](http://foo.bar/commits/90d5a64bd526a39482dca43c7d71c5c1fb02a608))
- **数据导入器:** 先上传后确认导入 ([93594cf](http://foo.bar/commits/93594cf45a05079f6d60ed39f8d3f911c8d82c7d))
- **物料选择器:** 接口对接完成 ([119f238](http://foo.bar/commits/119f23806a5ad4adc954689c7ac2ddc8b9768dbd))
- **级联选择器:** 当 min、max 都为 1 时进入单选模式 ([e2d9446](http://foo.bar/commits/e2d9446feb8da0a99f6b492b7cbd92218883d91d))

### [0.0.9](http://foo.bar/pull-requests?create&targetBranch=refs%2Ftags%2Fv0.0.8&sourceBranch=refs%2Ftags%2Fv0.0.9) (2020-11-20)

### 修复

- **MaterialPicker:** 修复日期格式化问题 ([3492a20](http://foo.bar/commits/3492a200ef056a1a21b9ecf50dbb482ec990a1be))

### 特性

- 用 Dialog 重构所有弹出类组件 ([e930af8](http://foo.bar/commits/e930af89b027f656a4d161350d142841e4260ead))
- **组件:** 新增 Dialog 弹窗 ([4f6c7d0](http://foo.bar/commits/4f6c7d0f7bf2e407c758876209b17c42aca24d68))

### [0.0.8](http://foo.bar/pull-requests?create&targetBranch=refs%2Ftags%2Fv0.0.7&sourceBranch=refs%2Ftags%2Fv0.0.8) (2020-11-19)

### 特性

- **AddressPicker:** 用 CascadePicker 重构 ([14fee46](http://foo.bar/commits/14fee46c71edb854a29510d44ca330548565aa9e))
- **DataExporter:** 使用 useForm 重构 ([6d46a4c](http://foo.bar/commits/6d46a4c77752d81645699ebb26692e2b6c7b639e))
- **ServiceCategoryPicker:** 用 CascadePicker 重构 ([48efe8a](http://foo.bar/commits/48efe8af508efda98d6f676fa89c308b9028578c))
- **组件:** 新增 DataImporter 数据导入器 ([433324a](http://foo.bar/commits/433324a63c1a7ea3243d4aee7176c9050939e265))
- 抽象出 renderDialogComponent 工具 ([839c649](http://foo.bar/commits/839c649861c9ee9ab61f4e6482f29802129cf3f9))
- **组件:** 新增 CascadePicker 级联选择器 ([71cb518](http://foo.bar/commits/71cb518886cf50618d08c7a25a12c1131597cb48))

### [0.0.7](http://foo.bar/pull-requests?create&targetBranch=refs%2Ftags%2Fv0.0.6&sourceBranch=refs%2Ftags%2Fv0.0.7) (2020-11-18)

### 修复

- **ServiceCategoryPicker:** 强制显示滚动条 ([087bdc2](http://foo.bar/commits/087bdc2f9916ce96ca9da2761f2eb4bb7afff33c))

### [0.0.6](http://foo.bar/pull-requests?create&targetBranch=refs%2Ftags%2Fv0.0.4&sourceBranch=refs%2Ftags%2Fv0.0.6) (2020-11-18)

### 特性

- **组件:** 新增 PeriodPicker 时段选择器 ([a619def](http://foo.bar/commits/a619defbc808f4602f331a19f616714fe5ee459d))
- **组件:** 新增 ServiceCategoryPicker 服务类目选择器 ([cf29c37](http://foo.bar/commits/cf29c3716c02e4380c9e524405c754bc33639bf2))
- 去除 @dcb/utils，以 vtils 代替 ([33172db](http://foo.bar/commits/33172db83cd5a543bf3ab4a85958650da312e5ec))
- 重构工具统一从 vtils 导入 ([16cf107](http://foo.bar/commits/16cf107e800558555420c9ed074bc9cfd109467c))

### 修复

- 解决 selection.js 的 ssr 兼容问题 ([5e0e075](http://foo.bar/commits/5e0e075d62a434b819a8440e799147dd3a5f4453))

### [0.0.4](http://foo.bar/pull-requests?create&targetBranch=refs%2Ftags%2Fv0.0.3&sourceBranch=refs%2Ftags%2Fv0.0.4) (2020-11-17)

### 特性

- 表单提交前预处理将富图片转换为图片链接 ([4f035e0](http://foo.bar/commits/4f035e01ca4d72417bde042d62863c161c0bd736))
- **MaintenanceManager:** 支持图片项 ([7683952](http://foo.bar/commits/7683952140177ca88745a0e632c10904c39a4caa))
- **useForm:** 重构使用 yup 作为表单验证工具 ([e6555de](http://foo.bar/commits/e6555de9b1410021b8ffd9bb45c15cdb1287bfe4))
- **组件:** 新增 MaintenanceManager 维护管理器 ([4858f40](http://foo.bar/commits/4858f40b36bddfb0e75e7f920d63cf17691325a8))

### [0.0.3](http://foo.bar/pull-requests?create&targetBranch=refs%2Ftags%2Fv0.0.2&sourceBranch=refs%2Ftags%2Fv0.0.3) (2020-11-16)

### 修复

- 文档地址 ([60e1d6b](http://foo.bar/commits/60e1d6b03684b169080cc9bf31b5efa6f2f4e997))

### [0.0.2](http://foo.bar/pull-requests?create&targetBranch=refs%2Ftags%2Fv0.0.1&sourceBranch=refs%2Ftags%2Fv0.0.2) (2020-11-16)

### 特性

- **地址选择器:** 重构以支持全选、未决状态等 ([d4d174d](http://foo.bar/commits/d4d174d1e8c5bf3a5ce0eba9cd59de1413f5a6b0))
- **组件:** 新增 DataExporter 数据导出器 ([690f0a1](http://foo.bar/commits/690f0a17afea022f8c7fef7ae26154fafffd75ef))
- **组件:** 新增 LinkPreviewer 链接预览器 ([9ea9172](http://foo.bar/commits/9ea917220ea2bafad02f2e0294480eb7b793be37))
- **组件:** 新增 RolePicker 角色选择器 ([0eaa76e](http://foo.bar/commits/0eaa76e6d34c0c8da4560d4f61f211f474efba4d))
- 钉钉通知时 at 相关人 ([0ffa2f3](http://foo.bar/commits/0ffa2f3139065e1b371626457945e7e5bf164641))

### 0.0.1 (2020-11-16)

### Features

- 完成构建、发布流程 ([0151deb](http://http://foo.bar/commit/0151deb9d416ccc3902eabc3e0acdb8ed5fa7a24))
- **文档:** API ([0d0f086](http://http://foo.bar/commit/0d0f0865b7a9fccc804325c1843528894bfdd832))
- **组件:** 新增 AddressPicker 地址选择器 ([f073132](http://http://foo.bar/commit/f07313288c49a6bcf4898202789d7c57b6f51a0e))
- **组件:** 新增 MaterialPicker 物料选择器 ([089c11c](http://http://foo.bar/commit/089c11c8b5ce77aa569d9bc41eaa8f877f604583))
- 新增 renderComponent ([4346697](http://http://foo.bar/commit/43466971dfa898e6fce6708296aa6551c4fb0dd1))
- **组件:** 新增 StaffPicker 人员选择器 ([831a343](http://http://foo.bar/commit/831a343e08b8c9d6c829a9d45042b6dcdfdcbeba))
- 初始化项目 ([e30821e](http://http://foo.bar/commit/e30821e3ce3236b35948ff4e83861925ad423707))
