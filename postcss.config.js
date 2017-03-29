module.exports = {
  parser: require('postcss-scss'),
  plugins: [
    require('postcss-smart-import')({
    }),
    require('precss')({
      import: {
        disable: true
      }
    }),
    require('postcss-cssnext')({
      browsers: ['last 2 versions']
    })
  ]
}
