const express = require('express')
const path = require('path')
const proxy = require('http-proxy-middleware')
const compression = require('compression')
const history = require('connect-history-api-fallback');
let app = express()
app.use(history())
app.use(compression())
app.use(express.static(path.join(__dirname, './dist')))
app.use('*', proxy({
  target: 'http://hgbl.dianpiao360.com/',
  changeOrigin: true,
}))

app.listen(8082, function (err) {
  if (err) {
    console.log(err)
  }
})