import React, { Component } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Expenditure from './expenditure'
import Income from './income'
import WalletTabs from './tabs'

const Wallet = ({match}) => (
  <WalletTabs>
    <Switch>
      <Route exact path={`${match.url}/income`} component={Income}/>
      <Route exact path={`${match.url}/expenditure`} component={Expenditure}/>
    </Switch>
  </WalletTabs>
)
export default Wallet
