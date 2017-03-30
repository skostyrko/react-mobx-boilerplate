import webpack from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import merge from 'webpack-merge'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import BabiliPlugin from 'babili-webpack-plugin'
import baseConfig from './base.babel'

export default merge(baseConfig, {
  devtool: 'cheap-module-source-map',

  entry: ['babel-polyfill', './app/app'],

  module: {
    rules: [
      {
        test: /\.global\.scss$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader?importLoaders=1!postcss-loader?sourceMap=inline',
          fallback: 'style-loader'
        })
      },

      // Pipe other styles through css modules and append to style.css
      {
        test: /^((?!\.global).)*\.scss$/,
        use: ExtractTextPlugin.extract({
          use: {
            loader: 'css-loader?importLoaders=1!postcss-loader?sourceMap=inline'
          }
        })
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      children: true,
      minChunks: 2,
      async: true
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new BabiliPlugin(),
    new ExtractTextPlugin('style.css'),

    new HtmlWebpackPlugin({
      template: 'app/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      },
      inject: true
    })
  ]
})
