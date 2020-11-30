const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  pages: {
    index: {
      // page 的入口
      entry: 'src/main.js',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html', 
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Index Page',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-vant-index', 'index']
    },
    // 当使用只有入口的字符串格式时，
    // 模板会被推导为 `public/subpage.html`
    // 并且如果找不到的话，就回退到 `public/index.html`。
    // 输出文件名会被推导为 `subpage.html`。
    subpage: {
      entry: 'src/main2.js',
      chunks: ['chunk-vendors', 'chunk-vant-subpage', 'subpage']
    }
  },
  productionSourceMap: false,
  configureWebpack: {
    plugins: [
      new BundleAnalyzerPlugin()
    ],
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendors: {
            name: 'chunk-vendors',
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            chunks: 'initial'
          },
          vantIndex: {
            name: 'chunk-vant-index',
            // test: /[\\/]node_modules[\\/](vant)[\\/]/,
            test (module) {
              // console.log(module)
              const size = module._chunks.size
              let chunkName = ''
              if (size === 1) {
                chunkName = [...module._chunks.values()][0].name
              }

              let path = module.resource
              if (!path) return false
              path = path.replace(/\\/g, '/')
              const result = path && /node_modules\/vant\n*/.test(path) && size === 1 && chunkName === 'index'
              return result
            },
            minSize: 1,
            priority: -5,
            chunks: 'all',
          },
          vantSubpage: {
            name: 'chunk-vant-subpage',
            // test: /[\\/]node_modules[\\/](vant)[\\/]/,
            test (module) {
              // console.log(module)
              const size = module._chunks.size
              let chunkName = ''
              if (size === 1) {
                chunkName = [...module._chunks.values()][0].name
              }

              let path = module.resource
              if (!path) return false
              path = path.replace(/\\/g, '/')
              const result = path && /node_modules\/vant\n*/.test(path) && size === 1 && chunkName === 'subpage'
              return result
            },
            minSize: 1,
            priority: -5,
            chunks: 'all',
          },
        }
      },
    }
  },
}