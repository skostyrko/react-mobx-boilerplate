const path = require('path')

module.exports = {
  module: {
    loaders: [
      {
        test: /.global.scss$/,
        loaders: ['style', 'css?importLoaders=1', 'postcss'],
        include: path.resolve(__dirname, '../')
      },
      {
        test: /^((?!\.global).)*\.scss$/,
        loader: 'style-loader!css-loader?importLoaders=1&modules&localIdentName=[name]__[local]__[hash:base64:5]!postcss-loader',
        include: path.resolve(__dirname, '../')
      },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader'
      },
      {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader'
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|webp)$/,
        loader: 'url-loader'
      }
    ]
  }
}
