import React, { Component } from 'react'
import { TabBar, Button } from 'antd-mobile'

export default class FooterBar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedTab: 'redTab'
    }
  }

  changeTab (key) {
    this.setState({
      selectedTab: key
    })
  }

  render () {
    return (
      <div>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
        >
          <TabBar.Item
            title="Life"
            key="Life"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat'
            }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat'
            }}
            />
            }
            selected={this.state.selectedTab === 'blueTab'}
            onPress={this.changeTab.bind(this, 'blueTab')}
            data-seed="logId"
          >
          </TabBar.Item>
          <TabBar.Item
            icon={{uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg'}}
            selectedIcon={{uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg'}}
            title="My"
            key="my"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={this.changeTab.bind(this, 'yellowTab')}
          >
          </TabBar.Item>
        </TabBar>
      </div>
    )
  }
}