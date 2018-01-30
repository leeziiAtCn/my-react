import React, { Component } from 'react'
import styled from 'styled-components'

import HomeCarousel from './carousel'
const Test = styled.div`
background:red;
width: 100px;
height: 100px;
border: 10px solid black;
`
export default class Home extends Component {
  constructor () {
    super()
    this.state = {}
  }

  render () {
    return (
      <div>
        <HomeCarousel/>
        <Test/>
      </div>
    )
  }
}
