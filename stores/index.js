import Inferno from 'inferno'
import { Provider as MobxProvider } from 'inferno-mobx'

import dicere from './dicere'
import query, { init as queryInit } from './query'

export function Provider ({ ctx, children }) {
  queryInit(ctx)

  return (
    <MobxProvider
      dicere={dicere}
      query={query}
      >{children}
    </MobxProvider>
  )
}
