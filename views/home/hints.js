const css = require('sheetify')
const html = require('choo/html')

const { searchHref } = require('../helpers')

module.exports = hints
function hints () {
  const header = css`:host {
    text-align: center;
    color: grey;
    text-weight: bold;
  }`

  const term = css`:host {
    color: grey;
    text-align: right;
  }`

  const def = css`:host {
    color: blue;
    text-align: left;
  }`

  return html`
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-half is-offset-one-quarter">
            <div class="columns">
              <h2 class="column is-size-4 ${header}">Try some searches:</h2>
            </div>
            <div class="columns is-size-5">
              <div class="column is-one-quarter ${term}">Prompt ID:</div>
              <div class="column ${def}">
                ${searchHref('#7')},
                ${searchHref('#21')},
                ${searchHref('#205')}
              </div>
            </div>
            <div class="columns is-size-5">
              <div class="column is-one-quarter ${term}">Tags:</div>
              <div class="column ${def}">
                ${searchHref('fiction')},
                ${searchHref('sci-fi characters:2')},
                ${searchHref('magic NOT harry-potter')}
              </div>
            </div>
            <div class="columns is-size-5">
              <div class="column is-one-quarter ${term}">Contents:</div>
              <div class="column ${def}">
                ${searchHref('"favourite food"')},
                ${searchHref('"a powerful force" NOT star-wars')},
                ${searchHref('"blue ladies" OR "space ladies"')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
}
