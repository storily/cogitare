const css = require('sheetify')
const html = require('choo/html')
const layout = require('../layout')

const banner = require('./banner')
const hints = require('./hints')
const search = require('./search')

module.exports = view
function view (state, emit) {
  const icon = css`
  :host.is-dark .title {
    background: url(/assets/icon.svg) no-repeat;
    background-size: 1em;
    color: black;
    padding-left: 1em;
    background-position: -0.25em 0.1em;
    filter: invert(100%);
  }
  `

  return layout(state, emit, [
    banner(
      'Cogitare',
      'A collection of story prompts and plot ideas for writers and bots.',
      ['is-dark', icon]
    ),
    search,
    hints
  ])
}
