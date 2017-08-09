import { App } from './views'
import { readFileSync } from 'fs'
import Inferno from 'inferno'
import Server from 'inferno-server'

export function render () {
  const html = readFileSync(__dirname + '/index.html', 'utf8');
  return html.replace('<div id="target" />', `<div id="target" class="server">${
    Server.renderToString(<App />)
  }</div>`)
}
