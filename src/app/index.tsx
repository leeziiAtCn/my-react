import * as React from 'react'
import {Switch, Redirect, withRouter} from 'react-router-dom'
//app

//page
import Home from '../page/home'
import Test from '../page/test'
//antd
import InterceptRoute from './intercept-route'
import {inject, observer} from 'mobx-react'

@inject('app')
@observer
class App extends React.Component<any, any> {
  render() {
    return (

        <Switch>
          <Redirect exact path='/' to='/home'/>
          <InterceptRoute exact path='/home' component={Home}
                          meta={{title: '主页'}}/>
          <InterceptRoute exact path='/test' component={Test}
                          meta={{title: '测试页面'}}/>
          <Redirect to='/not-find'/>
        </Switch>

    )
  }
}

export default withRouter(App)