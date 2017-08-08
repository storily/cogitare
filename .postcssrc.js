const { browserlist: browsers } = require('./package.json')

module.exports = {
  map: { inline: false },
  plugins: [
    require('postcss-partial-import')({ prefix: '_' }),
    require('postcss-cssnext')({ browsers, warnForDuplicates: false }),
    require('postcss-font-magician')(),
    require('cssnano')(),
  ]
}
