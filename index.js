import Inferno from 'inferno'
import { Router } from 'inferno-router'
import app from './views'
import history, { init } from './stores/history'

init()

const target = document.getElementById('target')
setTimeout(() => target.classList.remove('server'), 200)

const ctx = {
  global: window,
  url: '' + window.location
}

Inferno.render(
  <Router history={history.store}>{app(ctx)}</Router>,
  target,
  { recyclingEnabled: true }
)
