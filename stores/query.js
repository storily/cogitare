import { observable } from 'mobx'
import { URL } from 'url'

const query = observable({
  search: ''
})

export default query

export function fromUrl (url) {
  const { searchParams } = new URL(url, global.location || 'https://a')
  query.search = searchParams.get('q') || ''
}

let firstRun = true
export function init (ctx) {
  if (!firstRun) { return }
  fromUrl(ctx.url)
  firstRun = false
}
