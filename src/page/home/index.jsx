import React, { Component } from 'react'
import HomeCarousel from './carousel'
 class Home extends Component {
  constructor () {
    super()
    this.state = {}
  }

  render () {
    return (
      <div>
        <HomeCarousel/>
      </div>
    )
  }
}
export default Home