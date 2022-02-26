# app-vue2-cli

通过 `@vue/cli5` 初始 `vue2` 项目模板。

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
