import path from 'path'
import webpack from 'webpack'
import merge from 'webpack-merge'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import DashboardPlugin from 'webpack-dashboard/plugin'
import baseConfig from './base.babel'

const NODE_ENV = process.env.NODE_ENV || 'development'
const PORT = process.env.PORT || 3000
const publicPath = `http://localhost:${PORT}/`

export default merge(baseConfig, {
  devtool: 'cheap-module-eval-source-map',

  entry: [
    'react-hot-loader/patch',
    'babel-polyfill',
    'whatwg-fetch',
    `webpack-dev-server/client?http://localhost:${PORT}/`,
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

  resolve: {
    alias: {
      config: path.join(__dirname, 'config', `${NODE_ENV}.config`)
    }
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
      'process.env.PORT': JSON.stringify(PORT),
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
    port: PORT,
    hot: true,
    inline: false,
    historyApiFallback: true,
    contentBase: path.join(process.cwd(), 'build'),
    publicPath
  }
})
