import React, { Component } from 'react'
import { Tabs, WhiteSpace } from 'antd-mobile'
import { StickyContainer, Sticky } from 'react-sticky'

const StickyBar = (props) => (
  <Sticky>
    {({style}) => <div style={{...style, zIndex: 1}}><Tabs.DefaultTabBar {...props} /></div>}
  </Sticky>
)
export default class WalletTabs extends Component {
  constructor (props) {
    super(props)
    this.state = {
      tabs: [
        {
          title: '收入',
          path:'./income'
        },
        {
          title: '支出',
          path:'./expenditure'
        }
      ]
    }
  }

  tabChange ({path}, index) {
    this.props.history(path)
  }

  render () {
    return (
      <StickyContainer>
        <Tabs
          tabs={this.state.tabs}
          onChange={this.tabChange.bind(this)}
          renderTabBar={StickyBar}
        />
        {this.props.children}
      </StickyContainer>
    )
  }
}
