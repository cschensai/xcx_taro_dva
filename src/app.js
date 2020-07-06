import React, { Component } from 'react';
// 全局引入样式(智能在js中引入)
import 'taro-ui/dist/style/index.scss';
import './app.scss';


class App extends Component {

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // this.props.children 是将要会渲染的页面
  render () {
    return this.props.children;
  }
}

export default App
