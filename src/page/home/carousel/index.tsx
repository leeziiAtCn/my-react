import * as React from 'react'
import { Carousel } from 'antd-mobile'
// import styles from './index.less'

export default class HomeCarousel extends React.Component {
  state = {
    data: ['https://oddnhrkuu.qnssl.com/7b9dc25d-0d61-4623-8258-c423b4bc5b39.png'],
    imgHeight: 176,
    slideIndex: 0,
  }

  render () {
    return (
      <Carousel
        autoplay={true}
        infinite
        selectedIndex={0}
      >
        {this.state.data.map(val => (
          <img
            key={val}
            src={val}
            alt=""
            style={{width: '100%', verticalAlign: 'top'}}
            onLoad={() => {
              window.dispatchEvent(new Event('resize'))
              this.setState({imgHeight: 'auto'})
            }}
          />
        ))}
      </Carousel>

    )
  }
}