import Inferno from 'inferno'
import Server from 'inferno-server'
import VNodeFlags from 'inferno-vnode-flags'
import { RouterContext, match } from 'inferno-router'
import { readFileSync } from 'fs'
import path from 'path'
import app from './views'

export function render (ctx) {
  const renderProps = match(app, ctx.url)
  if (renderProps.redirect) {
    return ctx.redirect(renderProps.redirect)
  }

  const content = Inferno.createVNode(
    VNodeFlags.HtmlElement,
    'div',
    'server',
    Inferno.createVNode(
      VNodeFlags.ComponentUnknown,
      RouterContext,
      null, // class
      null, // children
      renderProps
    ),
    { id: 'target' }
  )

  const html = readFileSync(path.join(__dirname, '/index.html'), 'utf8')
  ctx.body = html.replace('<div id="target" />', Server.renderToString(content))
  if (/Took a wrong turn somewhere mate/.test(html)) {
    ctx.status = 404
  }
}
