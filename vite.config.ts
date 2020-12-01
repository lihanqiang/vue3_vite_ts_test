const path = require('path')
const src_path = path.resolve(__dirname, './src')
// vite.config.js # or vite.config.ts

module.exports = {
   /**
   * 在生产中服务时的基本公共路径。
   * @default '/'
   */
  base: '/',
  /**
   * 与“根”相关的目录，构建输出将放在其中。如果目录存在，它将在构建之前被删除。
   * @default 'dist'
   */
  outDir: 'dist',
  port: 9527,
  // 是否自动在浏览器打开
  open: false,
  // 是否开启 https
  https: false,
  // 服务端渲染
  ssr: false,
  // 引入第三方的配置
  optimizeDeps: {
    // include: ["moment", "echarts", "axios", "mockjs"]
    include: []
  },
  alias: {
    // 键必须以斜线开始和结束
    '/@/': src_path
    // '/@components/': path.resolve(__dirname, './src/components')
  },
  cssPreprocessOptions: {
    less: {
      modifyVars: {
        // 'primary-color': '#1890ff',
        // 'link-color': '#1DA57A'
      },
      javascriptEnabled: true
    }
  },
  proxy: {
    // 如果是 /lsbdb 打头，则访问地址如下
    // '/lsbdb': 'http://10.192.195.96:8087',
    // 如果是 /lsbdb 打头，则访问地址如下
    // '/lsbdb': {
    //   target: 'http://10.192.195.96:8087/',
    //   changeOrigin: true,
    //   // rewrite: path => path.replace(/^\/lsbdb/, '')
    // }
  }
}