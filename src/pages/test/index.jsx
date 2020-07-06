
import React, { Component } from 'react'
import { View } from '@tarojs/components'
import { connect } from 'react-redux'
import styles from './index.scss'

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
      <View className={styles.test}>
          
      </View>
    )
  }
}

export default Test
