import Inferno from 'inferno'
import { Route, IndexRoute } from 'inferno-router'
import { Layout } from './layout'
import Home from './home'
import NotFound from './not-found'

const app = (
  <Route component={Layout}>
    <IndexRoute component={Home} />
    <Route path='*' component={NotFound} />
  </Route>
)

export default app
