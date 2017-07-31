const html = require('choo/html')

module.exports = search
function search () {
  return html`
    <section class="section">
      <div class="container">
        <div class="field has-addons has-addons-centered">
          <p class="control">
            <input type="text" class="input is-large" autofocus />
          </p>
          <p class="control">
            <input type="submit" class="button is-primary is-large" value="Search">
          </p>
        </div>
      </div>
    </section>
  `
}
