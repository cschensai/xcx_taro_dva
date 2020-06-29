/**
 * pages页面快速生成脚本 
 * 用法：npm run tep `文件名`
 */

const fs = require('fs');

const dirName = process.argv[2];
const capPirName = dirName.substring(0, 1).toUpperCase() + dirName.substring(1);
if (!dirName) {
    console.log('文件夹名称不能为空！');
    console.log('示例：npm run temp test');
    process.exit(0);
}

//页面模板
const indexTep = `
import React, { Component } from 'react'
import { View } from '@tarojs/components'
import { connect } from 'react-redux'
import './index.less'

@connect(({ ${dirName} }) => ({
    ...${dirName},
}))

class ${capPirName} extends Component {
  config = {
    navigationBarTitleText: '标题'
  }
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <View className='${dirName}-wrap'>
          
      </View>
    )
  }
}

export default ${capPirName}
`

// less文件模版
const lessTep = `
${dirName}-wrap {
    width: 100%;
    min-height: 100vh;
}
`

// config 接口地址配置模板
const configTep = `
export default {
  navigationBarTitleText: 'xx'
}
`
// 接口请求模板
const serviceTep = `
import Api from '../../utils/request'

export const testApi = data => Api.test(
  data
)
`

//model模板

const modelTep = `
// import Taro from '@tarojs/taro';
import * as ${dirName}Api from './service';

export default {
  namespace: '${dirName}',
  state: {
  },

  effects: {},

  reducers: {}

}
`

const interfaceTep = `
/**
 * ${dirName}.state 参数类型
 *
 * @export
 * @interface ${capPirName}State
 */
export interface ${capPirName}State {}

/**
 * ${dirName}.props 参数类型
 *
 * @export
 * @interface ${capPirName}Props
 */
export interface ${capPirName}Props {}
`

fs.mkdirSync(`./src/pages/${dirName}`); // mkdir $1
process.chdir(`./src/pages/${dirName}`); // cd $1

fs.writeFileSync(`index.jsx`, indexTep); //tsx
fs.writeFileSync(`index.less`, lessTep); // scss
fs.writeFileSync('index.config.js', configTep); // config
fs.writeFileSync('service.js', serviceTep); // service
fs.writeFileSync('model.js', modelTep); // model
process.exit(0);