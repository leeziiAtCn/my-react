const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin')
module.exports = {
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static'
    }),
    new CleanWebpackPlugin('dist', {
      root: path.resolve(__dirname, '../'),
      verbose: true,
      dry: false
    }),
    new HtmlWebpackIncludeAssetsPlugin({
      assets: [
        {
          path: '//cdn.bootcss.com/react/16.4.0/umd/react.production.min.js',
          type: 'js'
        },
        {
          path: '//cdn.bootcss.com/react-dom/16.4.0/umd/react-dom.production.min.js',
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

  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      new OptimizeCSSAssetsPlugin({})  // use OptimizeCSSAssetsPlugin
    ]
  },
  externals : {
    'react': 'React',
    'react-dom': 'ReactDOM',
    'react-router-dom': 'ReactRouterDOM',
    // 'react-router': 'ReactRouter',
  }
}
