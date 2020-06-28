
import React, { Component } from 'react'
import { View } from '@tarojs/components'
import { connect } from 'react-redux'
import './index.less'

@connect(({ test }) => ({
    ...test,
}))

class Test extends Component {
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
      <View className='test-wrap'>
          test
      </View>
    )
  }
}

export default Test
