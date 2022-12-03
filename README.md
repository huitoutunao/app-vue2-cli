# app-vue2-cli

通过 `@vue/cli5` 初始 `vue2.6.x` 项目模板。

## stylelint

安装 `v14.0.0+` 版本后遇到了问题，`Unknown word  CssSyntaxError`，阅读[官方文档](https://github.com/stylelint/stylelint/blob/main/docs/user-guide/get-started.md#linting-everything-else)得知，针对解析 `.vue` 文件需要 [stylelint-config-recommended-vue](https://github.com/ota-meshi/stylelint-config-recommended-vue) 依赖。

建议 `postcss >= 8.4.7`。

总的来说需要安装如下依赖：
```sh
$ yarn add -D stylelint stylelint-config-recommended-vue stylelint-config-standard-scss postcss-html stylelint-prettier stylelint-config-prettier stylelint-config-recess-order
# 或
$ npm install -D stylelint stylelint-config-recommended-vue stylelint-config-standard-scss postcss-html stylelint-prettier stylelint-config-prettier stylelint-config-recess-order
```
- [stylelint](https://github.com/stylelint/stylelint)
- [stylelint-config-recommended-vue](https://github.com/ota-meshi/stylelint-config-recommended-vue)
- [stylelint-config-standard-scss](https://github.com/stylelint-scss/stylelint-config-standard-scss)
- [stylelint-prettier](https://github.com/prettier/stylelint-prettier)
- 属性顺序（本项目使用） [stylelint-config-recess-order](https://github.com/stormwarning/stylelint-config-recess-order)
- 属性顺序 [stylelint-order](https://github.com/hudochenkov/stylelint-order)

## vue test utils

例如：测试页面包含 `$route` 或 `$router`，请按照[官网](https://v1.test-utils.vuejs.org/zh/guides/#%E9%85%8D%E5%90%88-vue-router-%E4%BD%BF%E7%94%A8)进行配置测试用例。
```js
// example.spec.js

import { mount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import TestView from '@/views/TestView.vue'

const localVue = createLocalVue()
localVue.use(VueRouter)

const routes = [
  {
    path: '/test-page',
    name: 'test.page',
    component: TestView,
    meta: {
      title: '测试',
    },
  },
]
const router = new VueRouter({ routes })

mount(TestView, {
  localVue,
  router
})
```

涉及 Vuex 的测试用例[戳这里](https://v1.test-utils.vuejs.org/zh/guides/#%E5%9C%A8%E7%BB%84%E4%BB%B6%E4%B8%AD%E6%B5%8B%E8%AF%95-vuex)

**如果项目使用了第三方库。例如：vant 组件库，需要在 `jest.config.js` 配置文件将这个依赖进行 es6 编码转译。**
```js
// jest.config.js

module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  transformIgnorePatterns: ['/node_modules/(?!(vant))/'], // 除了 vant 目录，其他都不需要转译
}
```
```js
// example.spec.js

import { mount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import { Toast } from 'vant'
import TestView from '@/views/TestView.vue'

const localVue = createLocalVue()
localVue.use(VueRouter)
localVue.use(Toast)

const routes = [
  {
    path: '/test-page',
    name: 'test.page',
    component: TestView,
    meta: {
      title: '测试',
    },
  },
]
const router = new VueRouter({ routes })

mount(TestView, {
  localVue,
  router
})
```

## git 提交代码解决 lf 和 crlf 冲突

git 全局配置如下命令
```sh
# 提交时转换为 lf，检出时不转换
$ git config --global core.autocrlf input
```

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
