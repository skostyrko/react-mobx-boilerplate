import path from 'path'
import webpack from 'webpack'

export default {
  module: {
    rules: [{
      test: /\.jsx?$/,
      use: 'babel-loader',
      exclude: /node_modules/
    },
    {
      test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 10000,
          mimetype: 'application/font-woff'
        }
      }
    },
    {
      test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 10000,
          mimetype: 'application/font-woff'
        }
      }
    },
    {
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 10000,
          mimetype: 'application/octet-stream'
        }
      }
    },
    {
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      use: 'file-loader'
    },
    {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 10000,
          mimetype: 'image/svg+xml'
        }
      }
    },
    {
      test: /\.(?:ico|gif|png|jpg|jpeg|webp)$/,
      use: 'url-loader'
    }]
  },

  output: {
    path: path.resolve(process.cwd(), 'build'),
    publicPath: '/',
    filename: '[name].[hash].js',
    chunkFilename: '[name].[chunkhash].chunk.js'
  },

  /**
   * Determine the array of extensions that should be used to resolve modules.
   */
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },

  plugins: [
    new webpack.NamedModulesPlugin()
  ]
}
