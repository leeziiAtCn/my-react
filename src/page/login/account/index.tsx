import * as React from 'react'
import {InputItem} from 'antd-mobile'
import {inject, observer} from 'mobx-react'

@inject('user')
@observer

export default class Account extends React.Component<any, any> {

  render() {
    const {login} = this.props.user

    return (
        <InputItem
            type="phone"
            placeholder="请输入您的账号"
            error={login.accountError}
            onErrorClick={login.onAccountErrorClick.bind(login)}
            onChange={login.onAccountChange.bind(login)}
            value={login.account}
        >账号</InputItem>
    )
  }
}