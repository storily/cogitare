import Inferno from 'inferno'
import { Router } from 'inferno-router'
import createBrowserHistory from 'history/createBrowserHistory'
import app from './views'

const target = document.getElementById('target')
setTimeout(() => target.classList.remove('server'), 200)

const browserHistory = createBrowserHistory()

const ctx = {
  location: window.location
}

Inferno.render(
  <Router history={browserHistory}>{app(ctx)}</Router>,
  target,
  { recyclingEnabled: true }
)
