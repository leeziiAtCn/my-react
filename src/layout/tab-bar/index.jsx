import React, { Component } from 'react'
import { TabBar } from 'antd-mobile'
import style from './index.less'
import { withRouter } from 'react-router-dom'
import history from 'src/history'

class AppHeaderTabBar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedTab: '',
    }
  }

  componentWillMount () {
    this.setState({
      selectedTab: '/' + history.location.pathname.split('/')[1]
    })
  }

  changeTab ({path}, index) {
    this.setState({
      selectedTab: path
    })
    console.log(path)
    this.props.history.push(path)
  }

  render () {
    const tabs = [
      {
        text: '主页',
        icon: 'icon-homepage',
        activeIcon: 'icon-homepage_fill',
        activeColor: '',
        path: '/home',
        active: true
      },
      {
        text: '钱包',
        icon: 'icon-coupons',
        activeIcon: 'icon-coupons_fill',
        activeColor: '',
        path: '/wallet',
        active: false
      },
      {
        text: '我的',
        icon: 'icon-people',
        activeIcon: 'icon-people_fill',
        activeColor: '',
        path: '/mine',
        active: false
      }
    ]

    return (
      <div className={style.footer}>
        <TabBar
          unselectedTintColor='#949494'
          tintColor='#33A3F4'
          barTintColor='white'
        >
          {
            tabs.map((tab, index) => (
              <TabBar.Item
                title={tab.text}
                key={tab.path}
                icon={<div className={`${style.iconfont} iconfont ${tab.icon}`}/>}
                selectedIcon={<div className={`${style.iconfont} iconfont ${tab.activeIcon}`}/>}
                selected={this.state.selectedTab === tab.path}
                onPress={this.changeTab.bind(this, tab, index)}
              />
            ))
          }
        </TabBar>
      </div>
    )
  }
}

export default withRouter(AppHeaderTabBar)
