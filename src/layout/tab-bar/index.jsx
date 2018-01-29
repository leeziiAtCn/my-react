import React, { Component } from 'react'
import styled from 'styled-components'
import TabItem from './tab-item'

const AppTabBar = styled.div`
background:#fefefe;
line-height: 3.2rem;
border-top: 1px solid #ddd;
display: flex;
`
export default class Header extends Component {
  constructor () {
    super()
    this.state = {
      tabs: [
        {
          text: '主页',
          icon: '',
          activeIcon: '',
          activeColor: '',
          path: '#/home',
          active: true
        },
        {
          text: '钱包',
          icon: '',
          activeIcon: '',
          activeColor: '',
          path: '#/wallet/income',
          active: false
        },
        {
          text: '我的',
          icon: '',
          activeIcon: '',
          activeColor: '',
          path: '#/mine',
          active: false
        }
      ]
    }
  }

  changeTab = ({path}, index) => {
    const tabs = [...this.state.tabs]
    tabs.forEach(v => v.active = false)
    tabs[index].active = true
    this.setState({
      tabs
    })
    window.location.replace(path)
  }

  render () {
    return (
      <AppTabBar>
        {
          this.state.tabs.map((tab, index) => (
            <TabItem tab={tab} index={index} clickCallBack={this.changeTab} key={tab.path} active={tab.active}/>
          ))
        }
      </AppTabBar>
    )
  }
}