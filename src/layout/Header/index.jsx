import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile'

export default class Header extends Component {
  render () {
    return (
      <NavBar
        mode="light"
        icon={<Icon type="left"/>}
        onLeftClick={() => console.log('onLeftClick')}
      >主页</NavBar>
    )
  }
}