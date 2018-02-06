import * as React from 'react'
import { InputItem, Button, WhiteSpace ,List} from 'antd-mobile'
import styles from './index.less'
import { inject, observer } from 'mobx-react'

@inject('user')
@inject('app')
@observer
export default class Account extends React.Component<any, any> {

  render () {
    const {login} = this.props.user
    const {assets} = this.props.app
    return (
      <List className={styles.wrap}>
            <InputItem
              className={styles.inputItem}
              type="phone"
              labelNumber={2}
              placeholder="请输入您的手机号"
              error={login.accountError}
              onErrorClick={login.onErrorClick.bind(login, 0)}
              onChange={login.onAccountChange.bind(login)}
              value={login.account}
              clear
            >
              <i className={`${styles.icon} iconfont icon-zhanghu`} style={{color: assets.color}}/>
            </InputItem>
            <InputItem
              className={styles.inputItem}
              type={login.extraFlag === false ? 'password' : 'text'}
              clear
              labelNumber={2}
              placeholder="请输入您的密码"
              error={login.passwordError}
              onErrorClick={login.onErrorClick.bind(login, 1)}
              onChange={login.onPasswordChange.bind(login)}
              value={login.password}
              onExtraClick={login.togglePassword.bind(login)}
              extra={<i
                className={`${login.extraFlag ? 'icon-yanjing-zheng' : 'icon-yanjing-bi'} iconfont ${styles.extra}`}/>}
            >
              <i className={`${styles.icon} iconfont icon-mima`} style={{color: assets.color}}/>
            </InputItem>
            <WhiteSpace size="lg"/>
            <WhiteSpace size="lg"/>

        <Button type='primary' onClick={login.onLogin.bind(login)}
                  style={{backgroundColor: assets.color, borderColor: assets.color}}>登录</Button>

      </List>
    )
  }
}