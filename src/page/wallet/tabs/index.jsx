import React, { Component } from 'react'
import { Tabs, WhiteSpace } from 'antd-mobile'
import { StickyContainer, Sticky } from 'react-sticky'
import history from 'src/history'
import {withRouter} from 'react-router-dom'
const StickyBar = (props) => (
  <Sticky>
    {({style}) => <div style={{...style, zIndex: 1}}><Tabs.DefaultTabBar {...props} /></div>}
  </Sticky>
)
@withRouter
export default class WalletTabs extends Component {
  tabChange ({path}, index) {
    this.props.history.push(path)
  }

  render () {
    const tabs = [
      {
        title: '收入',
        path: './income'
      },
      {
        title: '支出',
        path: './expenditure'
      }
    ]
    return (
      <StickyContainer>
        <Tabs
          tabs={tabs}
          onChange={this.tabChange.bind(this)}
          renderTabBar={StickyBar}
        />
        {this.props.children}
      </StickyContainer>
    )
  }
}
