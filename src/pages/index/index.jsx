import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import { connect } from 'react-redux';
import './index.less'

@connect(({ index }) => {
  return {
    count: index.count,
  };
})

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleAdd = () => {
    this.props.dispatch({
      type: 'index/addCount',
      payload: this.props.count + 1,
    })
  }
  handleNavigate = () => {
    Taro.navigateTo({
      url: '/pages/test/index'
    });
  }
  render () {
    return (
      <View className='index'>
        <Text onClick={this.handleAdd}>Hello world!{ this.props.count }</Text>
        <Button type="primary" onClick onClick={this.handleNavigate}>跳转测试页面</Button>
      </View>
    )
  }
}