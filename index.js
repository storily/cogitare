const choo = require('choo')
const app = choo()

if (process.env.NODE_ENV !== 'production') {
  app.use(require('choo-devtools')())
  app.use(require('choo-log')())
}

// app.use(require('choo-service-worker')())

app.route('/', require('./views/home'))
app.route('/tag/:tag', require('./views/tag'))
app.route('*', require('./views/home/404'))

if (!module.parent) app.mount('body')
else module.exports = app
