import React, { Component } from 'react'
import styled from 'styled-components'

const Tab = styled.div`
flex: 1;
display: flex;
justify-content: center;
`
const Text = styled.span`
color: ${props => props.active ? 'red' : '#ddd'};
`
export default class TabItem extends Component {
  constructor () {
    super()
    this.state = {}
  }

  render () {
    return (
      <Tab onClick={e => this.props.clickCallBack(this.props.tab, this.props.index)}>
        <Text active={this.props.tab.active}>{this.props.tab.text}</Text>
      </Tab>
    )
  }
}