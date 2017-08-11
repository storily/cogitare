import createBrowserHistory from 'history/createBrowserHistory'
import { fromUrl } from './query'
import { URL } from 'url'

const history = {}
export default history

export function init () {
  history.store = createBrowserHistory()
  history.store.listen((location) => fromUrl(location.search))
}

export function update (modify) {
  const url = new URL(global.location)
  modify(url)
  history.store.push(url.pathname + url.search)
}
