import React, { Component } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Expenditure from './expenditure'
import Income from './income'
import WalletTabs from './tabs'
const Wallet = ({match}) => (
  <div>
    <WalletTabs />
    <Switch>
      <Redirect exact path={`${match.url}`} to={`${match.url}/income`}/>
      <Route exact path={`${match.url}/income`} component={Income}/>
      <Route exact path={`${match.url}/expenditure`} component={Expenditure}/>
    </Switch>
  </div>
)
export default Wallet
