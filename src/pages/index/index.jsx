import React, { Component } from 'react'
import { View,  } from '@tarojs/components'
import { AtButton } from 'taro-ui';
import WhiteSpace from '../../components/WhiteSpace';
import { tips } from '../../utils/tips';
import styles from './index.scss';

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className={styles.index}>
        <AtButton type="primary" onClick={() => tips.showInfoToast('普通提示')}>普通提示</AtButton>
        <WhiteSpace />
        <AtButton type="primary" onClick={() => tips.showSuccessToast('成功提示')}>成功提示</AtButton>
        <WhiteSpace />
        <AtButton type="primary" onClick={() => tips.showLoadingToast('加载中...')}>加载提示</AtButton>
      </View>
    )
  }
}
