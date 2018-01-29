import React, { Component } from 'react'
import styled from 'styled-components'

const AppHeader = styled.div`
background:#0094ff;
text-align: center;
line-height: 2rem;
color: #fff;
`
export default class Header extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <AppHeader>
        主页
      </AppHeader>
    )
  }
}