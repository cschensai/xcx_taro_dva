import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import { connect } from 'react-redux';
import taroRequest from '../../utils/request';
import styles from './index.scss';

@connect(({ index }) => {
  return {
    count: index.count,
  };
})

export default class Index extends Component {

  async componentWillMount () {
    const res = await taroRequest({
      url: '/',
    })
    console.log('res请求结果', res);
  }

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
      <View className={styles.index}>
        <Text onClick={this.handleAdd}>Hello world!{ this.props.count }</Text>
        <AtButton type="primary" onClick={this.handleNavigate}>跳转测试页面</AtButton>
      </View>
    )
  }
}
