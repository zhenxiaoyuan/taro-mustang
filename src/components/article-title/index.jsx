import React, { PureComponent } from 'react';
import { View, Image } from '@tarojs/components'

import './index.scss'

class Index extends PureComponent {
  render() {
      return (
        <View className='at-row at-row__align--center'>
          <View className='at-col at-col-4'>
            <Image className='img' src='https://hbimg.huabanimg.com/0879455a1a89266f94ce14bf22c7cc2c5e28a63a9c77-HJkmYc_fw658/format/webp' />
          </View>
          <View className='at-col at-col-6'>成都楼市降价啦！！</View>
        </View>
      );
  }
}

export default Index;
