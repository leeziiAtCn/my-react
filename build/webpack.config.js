const path = require('path')
const utils = require('./util')
const webpack = require('webpack')
const tsImportPluginFactory = require('ts-import-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const CUR_ENV = require('./env')[process.env.NODE_ENV]
const isBundle = CUR_ENV.env === 'production'
const theme = require('../package.json').theme
// css
const baseExtractCss = new ExtractTextPlugin('style/base.[hash:6].css')
const antdExtractCss = new ExtractTextPlugin('style/antd.[hash:6].css')
process.noDeprecation = true
const config = {
  entry: {
    main: './src/main.tsx'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'javascript/[name].[hash:6].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.tsx$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
        options: {
          getCustomTransformers: () => ({
            before: [tsImportPluginFactory({libraryName: 'antd',libraryDirectory: 'es', style: true})]
          })
        }
      },
      {
        test: /\.less$/,
        use: antdExtractCss.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true
              }
            },
            {
              loader: 'less-loader'
            }
          ]
        })
      },
    ]
  },
  devtool: isBundle ? false : '#cheap-module-eval-source-map',
  resolve: {
    alias: {
      'react': `react/umd/react.development.js`,
      'react-dom': `react-dom/umd/react-dom.development.js`,
      'react-router-dom': 'react-router-dom/umd/react-router-dom.min.js',
      'layout': path.join(__dirname, '../src/layout'),
      'page': path.join(__dirname, '../src/page'),
      'src': path.join(__dirname, '../src')
    },
    extensions: ['.tsx', '.ts','.js']
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
      'api/*': {
        target: 'http://hgbl.dianpiao360.com/',
        // target: 'http://hgbl.dianpiao360.com/',
        changeOrigin: true,
        secure: false
      }
    }
  },
  plugins: [
    antdExtractCss,
    baseExtractCss,
    new HtmlWebpackPlugin({
      favicon: './src/static/favicon.ico',
      filename: 'index.html',
      template: './src/static/index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        minifyJS:true
      }
    }),
    new webpack.DefinePlugin({
      CUR_ENV: JSON.stringify(CUR_ENV)
    }),
    new HtmlWebpackIncludeAssetsPlugin({
      assets: [
        {
          path: '//at.alicdn.com/t/font_501872_5ryzekpphmewxw29.css',
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
        },
        {
          path: '//cdn.bootcss.com/mobx/3.4.1/mobx.umd.min.js',
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
    'react-router-dom': 'ReactRouterDOM',
    'mobx': 'mobx'
  }
}
module.exports = config