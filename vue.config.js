/* eslint no-param-reassign: off */
/**
 * 下面内容按需添加，参考链接：https://github.com/staven630/vue-cli4-config
 * https://github.com/yulimchen/vue3-h5-template
 * TODO: 压缩图片
 * TODO: 自动生成雪碧图
 * TODO: 打包分析
 * TODO: 引入 cdn 资源
 * TODO: 多页面打包
 * TODO: 去除 console.log()
 * TODO: 单独打包第三方模块 splitChunks
 * TODO: 开启 gzip 压缩
 */
const StylelintPlugin = require('stylelint-webpack-plugin')
const CompressionWebpackPlugin = require('compression-webpack-plugin')

const IS_PROD = ['production'].includes(process.env.NODE_ENV)
const IS_DEV = ['development'].includes(process.env.NODE_ENV)

module.exports = {
  publicPath: IS_PROD ? './' : process.env.VUE_APP_PUBLIC_PATH,
  lintOnSave: 'error',
  transpileDependencies: true,
  devServer: {
    client: {
      overlay: {
        errors: true,
        warnings: true,
      },
    },
  },
  configureWebpack: () => {
    const cfg = {}
    if (IS_DEV) {
      cfg.plugins = [
        new StylelintPlugin({
          files: ['src/**/*.vue', 'src/assets/**/*.scss'],
        }),
      ]
    }
    if (IS_PROD) {
      cfg.plugins = [
        // 开启 gzip
        new CompressionWebpackPlugin({
          test: /\.(js|css)(\?.*)?$/i,
          filename: '[path][base].gz',
          threshold: 10240,
          minRatio: 0.8,
          deleteOriginalAssets: false,
        }),
      ]
    }
    return cfg
  },
}
