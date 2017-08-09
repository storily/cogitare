import Inferno from 'inferno';
import { Layout } from './layout'
import Home from './home'

export function App () {
  return (
    <Layout>
      <Home />
    </Layout>
  )
}
