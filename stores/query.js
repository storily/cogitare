import { observable } from 'mobx'
import { URL, URLSearchParams } from 'url'

const query = observable({
  dicere: '',
  nominare: ''
})

export default query

export function fromUrl (url) {
  const { searchParams } = new URL(url, global.location || 'https://a')
  query.dicere = searchParams.get('d') || ''
  query.nominare = searchParams.get('n') || ''
}

export function asParams (q) {
  const params = new URLSearchParams()
  if (q.nominare.length) params.set('n', q.nominare)
  if (q.dicere.length) params.set('d', q.dicere)
  return params
}

let firstRun = true
export function init (ctx) {
  if (!firstRun) { return }
  fromUrl(ctx.url)
  firstRun = false
}
