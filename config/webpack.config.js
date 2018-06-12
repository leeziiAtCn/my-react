const path = require('path')
const mode = process.env.NODE_ENV
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const envConfig = require(`./webpack.config.${mode}`)
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin')

let baseConfig = {
  mode: mode,
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
        test: /\.jsx$|\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: 'http://osekwi8dn.bkt.clouddn.com',
              name: '[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[local]-[hash:4]'
            }
          },
          {
            loader: 'less-loader'
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      '~': path.join(__dirname, '../src')
    },
    extensions: ['.jsx', '.js', '.less']
  },
  plugins: [

    new HtmlWebpackPlugin({
      // favicon: './src/static/favicon.ico',
      filename: 'index.html',
      template: './src/static/index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true
      }
    }),
    new MiniCssExtractPlugin({
      filename: 'style/[name].css',
      chunkFilename: '[id].css'
    }),
    new HtmlWebpackIncludeAssetsPlugin({
      assets: [
        {
          path: '//cdn.bootcss.com/babel-polyfill/6.26.0/polyfill.js',
          type: 'js'
        }
      ],
      append: false,
      publicPath: ''
    })
  ]

}
module.exports = merge(baseConfig, envConfig)
