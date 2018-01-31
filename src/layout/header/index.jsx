import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile'
import style from './index.less'

export default class AppHeader extends Component {
  render () {
    return (
      <NavBar
        className={style.header}
        mode='light'
        icon={<Icon type='left' />}
        onLeftClick={() => console.log('onLeftClick')}
        rightContent={[
          <Icon key='1' type='ellipsis' />
        ]}
        >NavBar</NavBar>
    )
  }
}
