import { Component } from 'react'
import { View } from '@tarojs/components'

import './article.scss'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
        <View>
          一级标题
          作者
          日期
          二级标题
          三级标题
          正文/段落
          图片
        </View>
    );
  }
}