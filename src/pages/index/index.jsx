import { Component } from 'react'
import { View, Navigator } from '@tarojs/components'
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
        <Navigator url={`/pages/article/article`}>
          <ArticleTitle></ArticleTitle>
        </Navigator>
        <ArticleTitle></ArticleTitle>
        <ArticleTitle></ArticleTitle>
      </View>
    )
  }
}
