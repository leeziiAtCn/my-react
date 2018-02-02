import React, { Component } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Expenditure from './expenditure'
import Income from './income'
import WalletTabs from './tabs'

export default class Wallet extends React.Component {
  render(){
    const match = {
      url:'/wallet'
    }
    return (
        <WalletTabs>
          <Switch>
            <Redirect exact path={`${match.url}`} to={`${match.url}/income`}/>
            <Route  path={`${match.url}/income`} component={Income}/>
            <Route  path={`${match.url}/expenditure`} component={Expenditure}/>
          </Switch>
        </WalletTabs>
    )
  }
}