import React from 'react'
import styled from 'styled-components'
import { HashRouter, Switch, Route, Link, Redirect } from 'react-router-dom'
import AppHeader from 'layout/header'
import TabBar from 'layout/tab-bar'
import Home from 'page/home'
import Mine from 'page/mine'
import Wallet from  'page/wallet'
const App = styled.div`
display: flex;
flex-direction: column;
height: 100vh;
`
const AppMain = styled.div`
flex: 1;
`
const Layout = () => (
  <HashRouter>
    <App>
      <AppHeader/>
      <AppMain>
        <Switch>
          <Redirect exact path='/' to="/home"/>
          <Route path='/home' component={Home}/>
          <Route path='/wallet' component={Wallet}/>
          <Route path='/mine' component={Mine}/>
          <Redirect to="/not-find"/>
        </Switch>
      </AppMain>
      <TabBar/>
    </App>
  </HashRouter>
)
export default Layout