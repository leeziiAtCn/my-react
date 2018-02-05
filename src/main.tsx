import * as React from 'react'
import * as ReactDom from 'react-dom'
import App from './app'
import { Router } from 'react-router-dom'
import { stores } from './store'
import { Provider } from 'mobx-react'
import history from './history'
ReactDom.render((
  <Provider {...stores}>
    <Router history={history}>
      <App/>
    </Router>
  </Provider>

), document.querySelector('#app'))
