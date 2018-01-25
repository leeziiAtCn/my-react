import React from 'react'
import { HashRouter, Switch, Route, Link, Redirect } from 'react-router-dom'
import Header from 'layout/Header'
import FooterBar from 'layout/Footer-bar'
import Home from 'page/Home'
import Mine from 'page/Mine'

const Layout = () => (
  <HashRouter>
    <div>
      <Header/>
      <Switch>
        <Redirect exact path='/' to="/home"/>
        <Route path='/home' component={Home}/>
        <Route path='/mine' component={Mine}/>
        <Redirect to="/not-find"/>
      </Switch>
      <FooterBar/>
    </div>
  </HashRouter>
)
export default Layout