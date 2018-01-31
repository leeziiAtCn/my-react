import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import AppHeader from 'layout/header'
import TabBar from 'layout/tab-bar'
import Home from 'page/home'
import Mine from 'page/mine'
import Wallet from 'page/wallet'
import style from './index.less'
import { Flex } from 'antd-mobile'
import createHistory from 'history/createBrowserHistory'

const history = createHistory()
const Layout = () => (
  <BrowserRouter>
    <Flex className={style.app} direction='column'>
      <AppHeader/>
      <Flex.Item className={style.main}>
        <Switch>
          <Redirect exact path='/' to='/home'/>
          <Route path='/home' component={Home}/>
          {/*<Route path='/wallet' component={Wallet}/>*/}
          <Route path='/mine' component={Mine}/>
          <Redirect to='/not-find'/>
        </Switch>
      </Flex.Item>
      <TabBar/>
    </Flex>
  </BrowserRouter>
)
export default Layout
