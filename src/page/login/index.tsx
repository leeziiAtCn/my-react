import * as React from 'react'
import {withRouter} from 'react-router'
import {Tabs} from 'antd-mobile'
import {inject, observer} from 'mobx-react'
import styles from './index.less'
import Avatar from '../../components/avatar'
import Account from './account'
import CodeMessage from './code-message'

@inject('app')
@observer
class Login extends React.Component <any, any> {

  render() {
    const {assets} = this.props.app
    const tabs = [
      {title: '账号登录'},
      {title: '验证码登录'},
    ]
    return (
        <div className={styles.box}>
          <div className={styles.avatarBox}
               style={{backgroundColor: assets.color}}>
            <Avatar style={{margin:'0 auto'}} />
          </div>
          <Tabs tabs={tabs}
                initialPage={0}
          >
            <Account/>
            <CodeMessage/>
          </Tabs>
        </div>
    )
  }
}

export default withRouter(Login)