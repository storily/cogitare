import Inferno from 'inferno'
import { Route, IndexRoute } from 'inferno-router'
import { Provider } from '../stores'
import { Layout } from './layout'
import Home from './home'
import NotFound from './not-found'

export default function app (ctx) {
  return (
    <Provider ctx={ctx}>
      <Route component={Layout}>
        <IndexRoute component={Home} />
        <Route path='*' component={NotFound} />
      </Route>
    </Provider>
  )
}
