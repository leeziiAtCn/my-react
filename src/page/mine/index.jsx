import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import M1 from './m1'
import M2 from './m2'

@inject('user')
@observer
export default class Mine extends Component {
  render () {
    const {store} = this.props
    return (
      <div>
        div
        <M1/>
        <M2/>
        <span onClick={this.props.user.fun}>button</span>
      </div>
    )
  }
}
