import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtButton } from 'taro-ui';
import styles from './index.scss';

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleNavigate = () => {
    Taro.showToast({
      title: '测试'
    })
  }
  render () {
    return (
      <View className={styles.index}>
        <AtButton type="primary" onClick onClick={this.handleNavigate}>跳转测试页面</AtButton>
      </View>
    )
  }
}
