import Inferno from 'inferno'
import { App } from './views'

const target = document.getElementById('target')
setTimeout(() => target.classList.remove('server'), 200)

Inferno.render(
  <App />,
  target,
  { recyclingEnabled: true }
)
