const html = require('choo/html')
const layout = require('../layout')

module.exports = view
function view (state, emit) {
  return layout(state, emit, html`
    <h1 class="is-size-2">${state.params.tag}</h1>
  `)
}
