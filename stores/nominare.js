import { action, observable } from 'mobx'
import { nominare as conf } from '../config'
import fetch from 'isomorphic-fetch'

const endpoints = {
  item: '/details',
  random: '/random',
  search: '/search',
}

const nominare = {
  item: observable(stub()),
  fetchItem: action(query('item')),

  random: observable(stub()),
  fetchRandom: action(query('random')),

  search: observable(stub()),
  fetchSearch: action(query('search')),
}

export default nominare

function stub () {
  return { loading: true, data: null, error: null }
}

function query (name, transform = (a) => a) {
  function success (data) {
    nominare[name].data = transform(data)
    nominare[name].error = null
    nominare[name].loading = false
  }

  function error (err) {
    nominare[name].data = null
    nominare[name].error = err
    nominare[name].loading = false
  }

  return async (params = {}) => {
    nominare[name].loading = true

    const url = new URL(
      endpoints[name] + '?' + new URLSearchParams(params),
      conf.url
    )

    try {
      success(await fetch(url.toString()).then((resp) => resp.json()))
    } catch (err) {
      console.error(err)
      error(err)
    }
  }
}
