import React, { Component } from 'react'
import {Redirect, Route } from 'react-router-dom'
import Expenditure from './expenditure'

const Wallet = ({match}) => (
  <div>
    <Route exact path={`${match.url}/income`}/>
    <Route path={`${match.url}/Expenditure`}/>
  </div>
)
export default Wallet