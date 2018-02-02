import React from 'react'
import { inject, observer } from 'mobx-react/index'

@inject('user')
@observer
export default class M2 extends React.Component {
  render () {
    return (
      <div>
        m2
        <p><span>{this.props.user.b}</span></p>
      </div>
    )
  }
}