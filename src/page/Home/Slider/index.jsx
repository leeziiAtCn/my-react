import React, { Component } from 'react'
import { Carousel, NoticeBar } from 'antd-mobile'

export default class Slider extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: [1, 2, 3]
    }
  }

  render () {
    return (
      <div>
        <NoticeBar marqueeProps={{loop: true, style: {padding: '0 7.5px'}}} mode="closable" style={{position:'absolute'}}>
          欢迎,请登录
        </NoticeBar>
        <Carousel
          autoplay
          infinite
          selectedIndex={1}
        >
          {this.state.data.map(val => (
            <img
              src='https://oddnhrkuu.qnssl.com/7b9dc25d-0d61-4623-8258-c423b4bc5b39.png'
              alt=""
              key={val}
            />
          ))}
        </Carousel>
      </div>
    )
  }
}