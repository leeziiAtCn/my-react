import * as React from 'react'
import * as ReactDom from 'react-dom'
import App from './app'
import {BrowserRouter} from 'react-router-dom'
import {stores} from './store'
import {Provider} from 'mobx-react'

ReactDom.render((
    <Provider {...stores}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>

), document.querySelector('#app'))
