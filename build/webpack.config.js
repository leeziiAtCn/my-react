const path = require('path')
const utils = require('./utils')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const cssOpts = require('./css.config')
const CUR_ENV = require('./env')[process.env.NODE_ENV]
const isBundle = CUR_ENV.env === 'production'
const theme = require('../package.json').theme

process.noDeprecation = true
//
const config = {
  entry: {
    main: './src/main.jsx'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'javascript/[name].[hash:6].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true
              }
            },
            {
              loader: 'postcss-loader',
              options: cssOpts
            },
            {
              loader: 'less-loader',
              options: {modifyVars: theme}
            }
          ]
        })
      }
    ]
  },
  devtool: isBundle ? false : '#cheap-module-eval-source-map',
  resolve: {
    alias: {
      'react': `react/umd/react.development.js`,
      'react-dom': `react-dom/umd/react-dom.development.js`,
      'react-router-dom': 'react-router-dom/umd/react-router-dom.min.js',
      'layout': path.join(__dirname, '../src/layout'),
      'page': path.join(__dirname, '../src/page')
    },
    extensions: ['.jsx', '.js']
  },
  devServer: {
    historyApiFallback: true,
    stats: 'minimal',
    noInfo: false,
    compress: true,
    host: utils.getIp(),
    port: 8082,
    disableHostCheck: true,
    proxy: {
      '*': {
        target: 'http://hgbl.dianpiao360.com/',
        // target: 'http://hgbl.dianpiao360.com/',
        changeOrigin: true,
        secure: false
      }
    }
  },
  plugins: [
    new ExtractTextPlugin('style/styles.css'),
    new HtmlWebpackPlugin({
      favicon: './src/static/favicon.ico',
      filename: 'index.html',
      template: './src/static/index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true
      }
    }),
    new webpack.DefinePlugin({
      CUR_ENV: JSON.stringify(CUR_ENV)
    }),
    new HtmlWebpackIncludeAssetsPlugin({
      assets: [
        {
          path: '//at.alicdn.com/t/font_501872_3zug8utz5a7wg66r.css',
          type: 'css'
        }
      ],
      append: false,
      publicPath: ''
    })

  ]
}
if (isBundle) {
  config.plugins.push(
    new CleanWebpackPlugin('dist', {
      root: path.resolve(__dirname, '../'),
      verbose: true,
      dry: false
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static'
    }),
    new HtmlWebpackIncludeAssetsPlugin({
      assets: [
        {
          path: '//at.alicdn.com/t/font_501872_3zug8utz5a7wg66r.css',
          type: 'css'
        },
        {
          path: '//cdn.bootcss.com/react/16.2.0/umd/react.production.min.js',
          type: 'js'
        },
        {
          path: '//cdn.bootcss.com/react-dom/16.2.0/umd/react-dom.production.min.js',
          type: 'js'
        },
        {
          path: '//cdn.bootcss.com/react-router-dom/4.2.2/react-router-dom.min.js',
          type: 'js'
        }
      ],
      append: false,
      publicPath: ''
    })
  )
  config.externals = {
    'react': 'React',
    'react-dom': 'ReactDOM',
    'react-router-dom': 'ReactRouterDOM'
  }
}
module.exports = config