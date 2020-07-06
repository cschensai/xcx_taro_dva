import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import './index.less'

export default class Index extends Component {

  componentWillMount () { }
  async componentWillMount () {
    const res = await taroRequest({
      url: '/',
    })
    console.log(222, res);
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleNavigate = () => {
    Taro.navigateTo({
      url: '/pages/test/index'
    });
  }
  render () {
    return (
      <View className='index'>
        <Button type="primary" onClick onClick={this.handleNavigate}>跳转测试页面</Button>
      </View>
    )
  }
}
