import * as React from 'react'
import {Button} from 'antd'
import {inject, observer} from 'mobx-react'
import styled from 'styled-components'

const Test = styled.span`
  color:red;
  font-size: 20px;
`
const Btn = styled(Button)`
`
@inject('home')
@observer
export default class Home extends React.Component<any, any> {
  t = this.props.home.t

  componentWillMount() {
    this.t.testMethods()
  }

  render() {

    return (
        <div>
          <Test>{this.t.test}</Test>
          <Btn type='danger' onClick={this.t.testMethods.bind(this.t)}>c</Btn>
        </div>
    )
  }
}