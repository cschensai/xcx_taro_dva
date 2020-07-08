import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import { connect } from 'react-redux';
import WhiteSpace from '../../components/WhiteSpace';
import { tips } from '../../utils/tips';
import styles from './index.scss';

@connect(({ index }) => {
  return {
    data: index.data,
  };
})

export default class Index extends Component {

  componentWillMount () {
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleGetData = () => {
    this.props.dispatch({
      type: 'index/getData',
      payload: {
        type: 'recent',
        page: 1,
      },
      cb() {
        tips.showSuccessToast('获取数据成功');
      },
    })
  }
  handleNavigate = () => {
    Taro.navigateTo({
      url: '/pages/test/index'
    });
  }
  render () {
    const { data } = this.props;
    return (
      <View className={styles.index}>
        <AtButton type="primary" onClick={this.handleNavigate}>跳转测试页面</AtButton>
        <WhiteSpace />
        <AtButton type="primary" onClick={this.handleGetData}>获取测试数据</AtButton>
        <View>
          { data ? JSON.stringify(data) : '' }
        </View>
      </View>
    )
  }
}
