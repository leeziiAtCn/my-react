import * as React from 'react'
import { Switch, Route ,Redirect} from 'react-router-dom'
//app
import Header from './header'
import Footer from './footer'
import styles from './index.less'
//page
import Home from '../page/home'
import Mine from '../page/mine'
import Trans from '../page/trans'
import Bill from '../page/bill'
//antd
import { Flex } from 'antd-mobile'

export default class App extends React.Component {

  render () {
    return (
      <Flex direction='column' align='start' className={styles.app}>
        <Header/>
        <Flex.Item className={styles.flexItem}>
          <Switch>
            <Redirect exact path='/' to='/home'/>
            <Route exact path='/home' component={Home}/>
            <Route exact path='/trans' component={Trans}/>
            <Route exact path='/bill' component={Bill}/>
            <Route exact path='/mine' component={Mine}/>
            <Redirect to='/not-find'/>
          </Switch>
        </Flex.Item>
        <Footer/>
      </Flex>
    )
  }
}