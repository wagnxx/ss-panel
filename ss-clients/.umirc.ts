import { defineConfig, webpack } from 'umi';
const DEFAULT_MODE = 'development';
let otherConfig = {};
if (DEFAULT_MODE !== process.env.NODE_ENV) {
  otherConfig = {
    ignoreMomentLocale: true,
    analyze: {
      analyzerMode: 'server',
      analyzerPort: 8888,
      openAnalyzer: true,
      // generate stats file while ANALYZE_DUMP exist
      generateStatsFile: false,
      statsFilename: 'stats.json',
      logLevel: 'info',
      defaultSizes: 'parsed', // stat  // gzip
    },

    chunks: ['vendor', 'umi'],
    chainWebpack: function(config: any, { webpack }) {
      config.merge({
        optimization: {
          // runtimeChunk: true,
          minimize: true,
          splitChunks: {
            chunks: 'initial', // 代码块类型 必须三选一： "initial"（初始化） | "all"(默认就是all) | "async"（动态加载）
            minSize: 0, // 最小尺寸，默认0
            minChunks: 1, // 最小 chunk ，默认1
            maxAsyncRequests: 1, // 最大异步请求数， 默认1
            maxInitialRequests: 1, // 最大初始化请求书，默认1
            // name: () => {}, // 名称，此选项课接收 function
            cacheGroups: {
              // common: {
              //   name: 'common',
              //   chunks: 'all',
              //   test: /node_modules/,
              //   minChunks: 2, //模块被引用2次以上的才抽离
              //   priority: -20,
              // },
              // 缓存组会继承splitChunks的配置，但是test、priorty和reuseExistingChunk只能用于配置缓存组。
              priority: '0', // 缓存组优先级 false | object |
              vendor: {
                // key 为entry中定义的 入口名称
                chunks: 'initial', // 必须三选一： "initial"(初始化) | "all" | "async"(默认就是异步)
                test: /antd/, // 正则规则验证，如果符合就提取 chunk
                name: 'vendor', // 要缓存的 分隔出来的 chunk 名称
                minSize: 0,
                minChunks: 1,
                enforce: true,
                reuseExistingChunk: true, // 可设置是否重用已用chunk 不再创建新的chunk
              },
            },
          },
        },
      });
    },

    externals: {
      react: 'window.React',
      'react-dom': 'window.ReactDOM',
    },
    scripts: [
      'http://cdn/react.production.min.js',
      'http://cdn/react-dom.production.min.js',
    ],
  };
}

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },

  ...otherConfig,

  publicPath: '/',
  base: '/',
  proxy: {
    '/api': {
      target: 'http://localhost:4000/v1',
      changeOrigin: true,
      pathRewrite: { '^/api': '/v1' },
    },
  },

  routes: [
    { path: '/login', component: '@/pages/logic/login' },
    {
      path: '/user',
      component: '../layout/userLayout',
      // redirect: '/user/announcement',  // 此处不能 用redirect
      // exact: false,
      routes: [
        {
          path: '/user',
          component: 'users/userHome',
          wrappers: ['@/routes/PrivateRoute'],
        },
        {
          path: '/user/userinfo',
          component: 'users/userInfo',
          wrappers: ['@/routes/PrivateRoute'],
        },
        { path: '/user/announcement', component: 'users/announcement' },
        { path: '/user/tickets', component: 'users/tickets' },
        { path: '/user/ssList', component: 'users/ssList' },
        { path: '/user/xx', component: 'developing' },
        { component: '@/pages/404' },
      ],
    },
    {
      path: '/',
      component: '../layout',
      exact: false,
      // wrappers: ['@/routes/PrivateRoute'],
      routes: [
        { path: '/test', component: '@/pages/test' },
        { path: '/puzzelecards', component: 'puzzlecards' },
        {
          path: '/',
          component: 'Dashboard/Analysis',
        },
        {
          path: '/home',
          component: 'Dashboard/Analysis',
        },
        {
          path: '/dashboard',
          routes: [
            { path: '/dashboard/analysis', component: 'Dashboard/Analysis' },
            { path: '/dashboard/monitor', component: 'Dashboard/Monitor' },
            { path: '/dashboard/workplace', component: 'Dashboard/Workplace' },
          ],
        },
        { component: '@/pages/404' },
      ],
    },
    { component: '@/pages/404' },
  ],
});
