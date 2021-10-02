import Inferno from 'inferno'
import { Route, IndexRoute } from 'inferno-router'
import { Provider } from '../stores'
import { Layout } from './layout'
import Home from './home'
import NotFound from './not-found'
import Random from './random'
import Name from './name'

export default function app (ctx) {
  return (
    <Provider ctx={ctx}>
      <Route component={Layout}>
        <IndexRoute component={Home} />
        <Route path='/random' component={Random} />
        <Route path='/name/:id' component={Name} />
        <Route path='*' component={NotFound} />
      </Route>
    </Provider>
  )
}
