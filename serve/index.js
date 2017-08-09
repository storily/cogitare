const Koa = require('koa')
const files = require('koa-static')
const path = require('path')
const { render } = require('./render')

const app = new Koa()

if (app.env === 'development') {
  app.use(require('koa-logger')())
}

app.use(require('koa-compress')())
app.use(require('koa-conditional-get')())
app.use(require('koa-etag')())

app.use(files(path.join(__dirname, '../public'), {
  maxage: app.env === 'development' ? 0 : 14400000 // 4 hours
}))

app.use(async (ctx, next) => {
  try {
    await next()
  } catch (err) {
    ctx.status = err.status || 500
    ctx.body = err.message
    ctx.app.emit('error', err, ctx)
  }
})

app.use(async (ctx) => {
  if (ctx.accepts('html')) {
    ctx.type = 'text/html'
    render(ctx)
  }
})

app.use(async (ctx) => {
  if (!ctx.body) {
    ctx.status = 404
    switch (ctx.accepts('html', 'json')) {
      case 'html':
        ctx.type = 'html'
        ctx.body = '<h1>Not Found</h1>'
        break
      case 'json':
        ctx.type = 'json'
        ctx.body = '{"status": "not-found"}'
        break
      default:
        ctx.type = 'text'
    }
  }
})

const { Socket } = require('net')
const fd = Number((process.env.LISTEN_FD || process.env.LISTEN_FDS || '').replace(/[^\d]/g, '').trim())
const server = fd
  ? app.listen(new Socket({ fd }), portlog)
  : app.listen(process.env.PORT || 8000, portlog)

function portlog () {
  console.log('Server is listening!')
  console.log(server.address())
}
