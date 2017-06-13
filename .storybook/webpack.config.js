const path = require('path')

module.exports = {
  module: {
    rules: [
      {
        test: /.global.scss$/,
        use: ['style-loader', 'css-loader?importLoaders=1', 'postcss-loader'],
        include: path.resolve(__dirname, '../')
      },
      {
        test: /^((?!\.global).)*\.scss$/,
        use: ['style-loader', 'css-loader?importLoaders=1&modules&localIdentName=[name]__[local]__[hash:base64:5]', 'postcss-loader'],
        include: path.resolve(__dirname, '../')
      },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        use: ['url-loader']
      },
      {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        use: ['url-loader']
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        use: ['url-loader']
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        use: ['file-loader']
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: ['url-loader']
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|webp)$/,
        use: ['url-loader']
      }
    ]
  },
  resolve: {
    alias: {
      '@kadira/storybook': '@storybook/react',
      '@kadira/storybook-addons': '@storybook/addons',
      '@kadira/react-storybook-addon-info': '@storybook/addon-info'
    }
  }
}
