import React from 'react'
import { Switch, Redirect } from 'react-router-dom'
import InterceptRoute from './intercept.route'
import Home from '~/pages/home'
import Mine from '~/pages/mine'

export default class Layout extends React.Component {
  render () {
    return (
      <Switch>
        <Redirect exact path='/' to='/home' />
        <InterceptRoute exact
                        path='/home'
                        component={Home}
                        meta={{title: '主页'}} />
        <InterceptRoute exact path='/mine' component={Mine}
                        meta={{title: '测试页面'}} />
        <Redirect to='/not-find' />
      </Switch>
    )
  }
}
