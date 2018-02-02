import React from 'react'
import ReactDom from 'react-dom'
import Layout from 'layout'
import './static/less/base.less'
import { BrowserRouter } from 'react-router-dom'
import { stores } from './store'
import { Provider } from 'mobx-react'

ReactDom.render((
  <Provider {...stores}>
    <BrowserRouter>
      <Layout/>
    </BrowserRouter>
  </Provider>
), document.getElementById('app'))
