const html = require('choo/html')
const layout = require('../layout')

const banner = require('./banner')
const hints = require('./hints')
const search = require('./search')

module.exports = view
function view (state, emit) {
  return layout(state, emit, [
    banner(
      'Nothing here',
      'Perhaps you took a wrong turn. Would you like to search for something?',
      ['is-warning']
    ),
    search,
    hints
  ])
}
