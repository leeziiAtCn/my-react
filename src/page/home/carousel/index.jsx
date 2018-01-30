import React, { Component } from 'react'
import { Carousel } from 'antd-mobile'

export default class HomeCarousel extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: [
        'http://osekwi8dn.bkt.clouddn.com/fedd2b3a5a3d1135c77a5691048b3c84.jpg',
        'http://osekwi8dn.bkt.clouddn.com/fee25c0d181f01fe07a65b7755738947.jpg',
        'http://osekwi8dn.bkt.clouddn.com/f095f6b458e9694134951f20b667736b.jpg'],
      imgHeight: 176,
      slideIndex: 0
    }
  }

  render () {
    return (
      <Carousel className="space-carousel"
                autoplay
                infinite
                beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                afterChange={index => this.setState({slideIndex: index})}
      >
        {this.state.data.map((val, index) => (
          <img
            key={val}
            src={val}
            alt=""
            style={{width: '100%', verticalAlign: 'top'}}
            onLoad={() => {
              // fire window resize event to change height
              window.dispatchEvent(new Event('resize'))
              this.setState({imgHeight: 'auto'})
            }}
          />
        ))}
      </Carousel>
    )
  }
}