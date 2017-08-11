import Inferno from 'inferno'
import { Router } from 'inferno-router'
import app from './views'
import createBrowserHistory from 'history/createBrowserHistory'
import { fromUrl } from './stores/query'

const target = document.getElementById('target')
setTimeout(() => target.classList.remove('server'), 200)

const browserHistory = createBrowserHistory()
browserHistory.listen((location) => fromUrl(location.search))

const ctx = {
  global: window,
  url: '' + window.location
}

Inferno.render(
  <Router history={browserHistory}>{app(ctx)}</Router>,
  target,
  { recyclingEnabled: true }
)
