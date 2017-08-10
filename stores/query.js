import { observable } from 'mobx'
import { parse } from 'querystring'

export default function (ctx) {
  const store = new Map()
  const query = ctx.location.search.replace(/^\?/, '')
  for (const [k, v] of Object.entries(parse(query))) {
    store.set(k, v)
  }

  return observable(store)
}
