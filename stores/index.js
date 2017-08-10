import Inferno from 'inferno'
import { Provider as MobxProvider } from 'inferno-mobx'

import query from './query'

export function Provider ({ ctx, children }) {
  return <MobxProvider
    query={query(ctx)}
  >{children}</MobxProvider>
}
