import React, { Component } from 'react'
import { Carousel } from 'antd-mobile'
import style from './index.less'

export default class HomeCarousel extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: [
        'http://osekwi8dn.bkt.clouddn.com/231231excc.png',
        'http://osekwi8dn.bkt.clouddn.com/sdfV34324.jpg'
      ]
    }
  }

  render () {
    return (
      <Carousel
        autoplay
        infinite
        selectedIndex={1}
      >
        {
          this.state.data.map(val =>
            <div className={style.img} key={val} style={{backgroundImage: `url(${val})`}}/>
          )
        }
      </Carousel>
    )
  }
}
