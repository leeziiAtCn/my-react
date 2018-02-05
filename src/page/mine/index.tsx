import * as React from 'react'
import {observer, inject} from 'mobx-react'
import {Button} from 'antd-mobile'

@inject('user')
@observer
export default class Mine extends React.Component<any, any> {
  render() {
    const {auth} = this.props.user
    return (
        <Button
            onClick={auth.login.bind(auth, 'username', 'password')}>
          login
        </Button>
    )
  }
}