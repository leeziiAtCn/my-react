import React, { Component } from 'react'
import { TabBar, Button } from 'antd-mobile'
import './index.less'

export default class FooterBar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedTab: '/home',
      iconList: [
        {
          className: 'icon-shouyeweixuanzhong',
          selectedClassName: 'icon-shouye',
          path: '/home',
          text: '首页'
        },
        {
          text: '交易',
          path: '/trans',
          className: 'icon-jiaoyiweixuanzhong',
          selectedClassName: 'icon-jiaoyi'
        },
        {
          text: '票源',
          path: '/bill',
          className: 'icon-piaoyuanweixuanzhong',
          selectedClassName: 'icon-piaoyuan'
        },
        {
          className: 'icon-zhanghuweixuanzhong',
          selectedClassName: 'icon-zhanghu',
          path: '/mine',
          text: '我的'
        }
      ]
    }
  }

  changeTab (key) {
    this.setState({
      selectedTab: key
    })
  }

  render () {
    return (
      <div className='footer'>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
        >
          {this.state.iconList.map(icon =>
            <TabBar.Item
              title={icon.text}
              key="Life"
              icon={<div className={'iconfont ' + icon.className}/>}
              selectedIcon={<div className={'iconfont ' + icon.selectedClassName}/>}
              selected={this.state.selectedTab === icon.path}
              onPress={this.changeTab.bind(this, icon.path)}
              data-seed="logId"
            >
            </TabBar.Item>)
          }
        </TabBar>

      </div>
    )
  }
}