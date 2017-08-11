import Inferno from 'inferno'
import { Provider as MobxProvider } from 'inferno-mobx'

import query, { init as queryInit } from './query'

export function Provider ({ ctx, children }) {
  queryInit(ctx)

  return <MobxProvider
    query={query}
  >{children}</MobxProvider>
}
