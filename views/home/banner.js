const html = require('choo/html')

module.exports = banner
function banner (title, subtitle, classes = []) {
  return html`
    <section class="hero ${classes.join(' ')}">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column is-half is-offset-one-quarter">
              <h1 class="title">${title}</h1>
              <h2 class="subtitle">${subtitle}</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
}
