import React, { PureComponent } from 'react';
import { Image } from '@tarojs/components'
import { Swiper, SwiperItem } from '@tarojs/components'

import './index.scss'

class Index extends PureComponent {
  render() {
      return (
        <Swiper
          className='banner'
          indicatorColor='#999'
          indicatorActiveColor='#333'
          circular
          indicatorDots
          autoplay>
          <SwiperItem>
            <Image className='img' src='https://hbimg.huabanimg.com/c2c34bd77d79fc39f2e3f63b1d4689533e65e395137d6-TTHWQb_fw658/format/webp' />
          </SwiperItem>
          <SwiperItem>
            <Image className='img' src='https://hbimg.huabanimg.com/e4e844595952bea137ab4a2d16f8fd8280f587071dea1-doBWU0_fw658/format/webp' />
          </SwiperItem>
          <SwiperItem>
            <Image className='img' src='https://hbimg.huabanimg.com/a31967a35453e361ec6ff1277239a69133fd4d8415bcd-kFTHPX_fw658/format/webp' />
          </SwiperItem>
        </Swiper>
      );
  }
}

export default Index;
