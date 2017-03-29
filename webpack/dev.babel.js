import path from 'path'
import webpack from 'webpack'
import merge from 'webpack-merge'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import DashboardPlugin from 'webpack-dashboard/plugin'
import baseConfig from './base.babel'

const port = process.env.PORT || 3000
const publicPath = `http://localhost:${port}/`

export default merge(baseConfig, {
  devtool: 'cheap-module-eval-source-map',

  entry: [
    'react-hot-loader/patch',
    'babel-polyfill',
    'whatwg-fetch',
    `webpack-dev-server/client?http://localhost:${port}/`,
    'webpack/hot/only-dev-server',
    path.join(process.cwd(), 'app/app.dev.js')
  ],

  module: {
    rules: [
      {
        test: /\.global\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 1
            }
          },
          'postcss-loader'
        ]
      },
      {
        test: /^((?!\.global).)*\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: true,
              importLoaders: 1,
              localIdentName: '[name]__[local]__[hash:base64:5]'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: 'inline'
            }
          }
        ]
      }
    ]
  },

  output: {
    publicPath
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    // turn debug mode on.
    new webpack.LoaderOptionsPlugin({
      debug: true
    }),
    new HtmlWebpackPlugin({
      template: 'app/index.html',
      inject: true
    }),
    new DashboardPlugin()
  ],

  devServer: {
    port,
    hot: true,
    inline: false,
    historyApiFallback: true,
    contentBase: path.join(process.cwd(), 'build'),
    publicPath
  }
})
