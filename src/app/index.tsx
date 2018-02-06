import * as React from 'react'
import {Switch, Redirect, withRouter} from 'react-router-dom'
//app
import Header from './header'
import Footer from './footer'
import styles from './index.less'
//page
import Home from '../page/home'
import Mine from '../page/mine'
import Trans from '../page/trans'
import Bill from '../page/bill'
import Login from '../page/login'
import Test from '../page/test'
//antd
import {Flex} from 'antd-mobile'
import InterceptRoute from '../interceptRoute'
import {inject, observer} from 'mobx-react'

@inject('app')
@observer
class App extends React.Component<any, any> {
  render() {
    return (
        <Flex direction='column' align='start' className={styles.app}>
          <Header/>
          <Flex.Item className={styles.flexItem}>
            <Switch>
              <Redirect exact path='/' to='/home'/>
              <InterceptRoute exact path='/home' component={Home}
                              meta={{title: '主页'}}/>
              <InterceptRoute exact path='/trans' component={Trans}
                              meta={{title: '交易'}}/>
              <InterceptRoute exact path='/bill' component={Bill}
                              meta={{title: '票源'}}/>
              <InterceptRoute exact path='/mine' component={Mine}
                              meta={{title: '我的'}}/>
              <InterceptRoute exact path='/login' component={Login}
                              meta={{title: '登录', hiddenTab: true}}/>
              <InterceptRoute exact path='/test' component={Test}
                              meta={{title: '测试页面'}}/>
              <Redirect to='/not-find'/>
            </Switch>
          </Flex.Item>
          <Footer/>
        </Flex>
    )
  }
}

export default withRouter(App)