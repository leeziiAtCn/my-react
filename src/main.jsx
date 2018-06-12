import React from 'react'
import ReactDom from 'react-dom'
import './less/reset.less'
import './less/global.less'
import TestImportImgAsCdn from '~/components/test-import-img-as-cdn'
import TestCssModules from '~/components/test-css-modules'
import { BrowserRouter } from 'react-router-dom'
import Layout from '~/Layout'
ReactDom.render((
  <div>
    <TestImportImgAsCdn />
    <TestCssModules />
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  </div>), document.getElementById('app'))
