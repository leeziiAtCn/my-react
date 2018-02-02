import React from 'react'
import { observer, inject } from 'mobx-react'

@inject('user')
@observer
export default class M1 extends React.Component {
  render () {
    return (
      <div>
        m1
        <p><span>{this.props.user.b}</span></p>
      </div>
    )
  }
}