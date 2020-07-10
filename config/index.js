const config = {
  projectName: 'xcx_client_dva',
  date: '2020-6-28',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  plugins: [],
  defineConstants: {
  },
  copy: {
    patterns: [
    ],
    options: {
    }
  },
  framework: 'react',
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {

        }
      },
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        // enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        enable: true, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          // namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
        }
      },
      cssModules: {
        // enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        enable: true, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    },
    // 由于引用 `node_modules` 的模块，默认不会编译，所以需要额外给 H5 配置 `esnextModules`
    esnextModules: ['taro-ui'],
    // 解决跨域
    devServer: {
      host: 'localhost', // 默认是0.0.0.0
      port: 8888, // 默认是10086
      // proxy: {
      //   '/': {
      //     target: 'http://172.16.22.152:7002',
      //     secure: false,
      //     changeOrigin: true,
      //   }
      // }
    },
  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
