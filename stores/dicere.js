import { action, observable } from 'mobx'
import { dicere as conf } from '../config'
import fetch from 'isomorphic-fetch'

const queries = {
  random: () => `query Random {
    random {
      id
      text
      tags { id name }
      dataset { id name }
    }
  }`,
  search: () => `query Search($query: String!) {
    search(query: $query) {
      item {
        id
        text
        tags { id name }
        dataset { id name }
      }
    }
  }`
}

const dicere = {
  random: observable(stub()),
  fetchRandom: action(query('random', ({ random }) => random[0])),

  search: observable(stub()),
  fetchSearch: action(query('search',
    ({ search }) => search.map(({ item }) => item)
  ))
}

export default dicere

function stub () {
  return { loading: true, data: null, error: null }
}

function query (name, transform = (a) => a) {
  function success ({ data, errors }) {
    if (errors) {
      return error(errors)
    }

    dicere[name].data = transform(data)
    dicere[name].error = null
    dicere[name].loading = false
  }

  function error (err) {
    dicere[name].data = null
    dicere[name].error = err
    dicere[name].loading = false
  }

  return ({ opts, variables } = {}) => {
    dicere[name].loading = true
    fetch(conf.url, {
      body: JSON.stringify({
        query: queries[name](opts),
        variables
      }),
      headers: {'Content-Type': 'application/json'},
      method: 'POST'
    }).then((resp) => resp.json())
      .then((data) => success(data), (err) => error(err))
  }
}
