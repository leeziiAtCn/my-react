import React, { Component } from 'react'
import { TabBar } from 'antd-mobile'

import styled from 'styled-components'

const AppTabBar = styled(TabBar)`

`
const AppTabBarItem = styled(TabBar.Item)`

`
const TabIcon = styled.div`
font-size: .4rem;
`

export default class AppHeaderTabBar extends Component {
  constructor () {
    super()
    this.state = {
      selectedTab: '#/home',
      tabs: [
        {
          text: '主页',
          icon: 'icon-homepage',
          activeIcon: 'icon-homepage_fill',
          activeColor: '',
          path: '#/home',
          active: true
        },
        {
          text: '钱包',
          icon: 'icon-coupons',
          activeIcon: 'icon-coupons_fill',
          activeColor: '',
          path: '#/wallet/income',
          active: false
        },
        {
          text: '我的',
          icon: 'icon-people',
          activeIcon: 'icon-people_fill',
          activeColor: '',
          path: '#/mine',
          active: false
        }
      ]
    }
  }

  changeTab = ({path}, index) => {
    this.setState({
      selectedTab:path
    })
    // window.location.replace(path)
  }

  render () {
    return (
      <AppTabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="white"
      >
        {
          this.state.tabs.map((tab,index) => (
            <AppTabBarItem
              title={tab.text}
              key={tab.path}
              icon={<TabIcon className={'iconfont ' + tab.icon}/>}
              selectedIcon={<TabIcon className={'iconfont ' + tab.activeIcon}/>}
              selected={this.state.selectedTab === tab.path}
              onPress={this.changeTab.bind(this,tab,index)}
            />
          ))
        }

      </AppTabBar>
    )
  }
}