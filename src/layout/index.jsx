import React from 'react'
import { Router, Switch, Route, Redirect, withRouter } from 'react-router-dom'
import Home from 'page/home'
import Mine from 'page/mine'
import Wallet from 'page/wallet'
import style from './index.less'
import { Flex } from 'antd-mobile'
import { inject, observer } from 'mobx-react'
import { useStrict } from 'mobx'
import AppHeader from 'layout/header'
import TabBar from 'layout/tab-bar'

useStrict(true)

@inject('user')
@withRouter
@observer
class Layout extends React.Component {
  render () {
    return (
      <Flex className={style.app} direction='column'>
        <AppHeader/>
        <Flex.Item className={style.main}>
          <Switch>
            <Redirect exact path='/' to='/home'/>
            <Route path='/home' component={Home}/>
            <Route path='/wallet' component={Wallet}/>
            <Route path='/mine' component={Mine}/>
            <Redirect to='/not-find'/>
          </Switch>
        </Flex.Item>
        <TabBar/>
      </Flex>
    )
  }
}

export default Layout
