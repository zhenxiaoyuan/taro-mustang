import { Component } from 'react'
import { View } from '@tarojs/components'
import { SearchBar, Banner, MainMenu, ArticleTitle } from '../../components'

import './index.scss'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <SearchBar />
        <Banner></Banner>
        <MainMenu></MainMenu>
        <ArticleTitle></ArticleTitle>
        <ArticleTitle></ArticleTitle>
        <ArticleTitle></ArticleTitle>
      </View>
    )
  }
}
