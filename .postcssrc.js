const { browserlist: browsers } = require('./package.json')

module.exports = {
  map: { inline: false },
  plugins: [
    require('postcss-partial-import')({ prefix: '_' }),
    require('postcss-cssnext')({
      browsers,
      warnForDuplicates: false,
      features: {
        customProperties: {
          preserve: "computed"
        }
      }
    }),
    require('postcss-font-magician')(),
    // require('cssnano')(),
  ]
}
