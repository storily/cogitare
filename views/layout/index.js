const css = require('sheetify')
const html = require('choo/html')
const nav = require('./nav')

const TITLE = 'Cogitare — Story prompts'

module.exports = layout
function layout (state, emit, contents = []) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)
  if (!Array.isArray(contents)) contents = [contents]

  const top = css`html {
    font-display: swap;
  }`

  return html`
    <body class="${top}">
      <header>
        ${nav()}
      </header>
      <main>
        ${contents.map((c) => c instanceof Function ? c() : c)}
      </main>
    </body>
  `
}

// Footer:
// Logo from an icon by [Patrick Snyder] (CC-BY)
// https://thenounproject.com/allbeefpaddy/collection/square-arrows/
