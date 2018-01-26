import './index.less'
import React, { Component } from 'react'
import Slider from './Slider'

export default class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render () {
    return (
      <div>

        <Slider/>
      </div>
    )
  }
}
