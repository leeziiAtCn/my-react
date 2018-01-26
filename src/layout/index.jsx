import './index.less'
import React from 'react'
import { HashRouter, Switch, Route, Link, Redirect } from 'react-router-dom'
import Header from 'layout/Header'
import FooterBar from 'layout/Footer-bar'
import Home from 'page/Home'
import Mine from 'page/Mine'
import { Flex } from 'antd-mobile'

const Layout = () => (
  <HashRouter>
    <Flex direction='column'  className='container'>
        <Header/>
      <Flex.Item className='main'>
        <Switch>
          <Redirect exact path='/' to="/home"/>
          <Route path='/home' component={Home}/>
          <Route path='/mine' component={Mine}/>
          <Redirect to="/not-find"/>
        </Switch>
      </Flex.Item>
      <FooterBar/>
    </Flex>
  </HashRouter>
)
export default Layout