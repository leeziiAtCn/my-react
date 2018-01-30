import React, { Component } from 'react'
import {NavBar,Icon} from 'antd-mobile'
import styled from 'styled-components'
import './index.less'
const Header = styled(NavBar)`

`
export default class AppHeader extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <Header
        mode="light"
        icon={<Icon type="left" />}
        onLeftClick={() => console.log('onLeftClick')}
        rightContent={[
          <Icon key="1" type="ellipsis" />,
        ]}
      >NavBar</Header>
    )
  }
}