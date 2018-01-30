import React, { Component } from 'react'
import styled from 'styled-components'
import './index.less'

export default class Header extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className={'header'}>
        主页
      </div>
    )
  }
}