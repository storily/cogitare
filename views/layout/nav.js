const html = require('choo/html')

module.exports = nav
function nav () {
  return html`
    <nav class="navbar">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img alt="Cogitare" src="/assets/icon.svg" height="48" width="32">
        </a>

        <div class="navbar-burger burger" data-target="nav-menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div class="navbar-menu" id="nav-menu">
        <div class="navbar-start">
          <a class="navbar-item" href="/random">Random</a>
          <a class="navbar-item" href="/tags">Tags</a>
          <a class="navbar-item" href="/docs/bots">Bots</a>
          <a class="navbar-item" href="/submit">Submit</a>
        </div>

        <div class="navbar-end">
          <a class="navbar-item" href="/tag/foo">Login</a>
        </div>
      </div>
    </nav>
  `
}
