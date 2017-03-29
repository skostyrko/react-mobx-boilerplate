module.exports = {
  parser: require('postcss-scss'),
  plugins: [
    require('postcss-smart-import')({ /* ...options */ }),
    require('precss')({ /* ...options */ }),
    require('postcss-cssnext')({
      browsers: ['last 2 versions']
    })
  ]
}
