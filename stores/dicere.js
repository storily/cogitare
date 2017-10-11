import { action, observable } from 'mobx'
import { dicere as conf } from '../config'
import fetch from 'isomorphic-fetch'

function metaField (name) {
  return `${name}Raw: metadata(key: "${name}") {
    value
  }`
}

const itemFragment = `fragment itemFields on Item {
  id
  text
  tags { id name }
  dataset {
    id
    name
    ${metaField('author')}
    ${metaField('license')}
  }
  ${metaField('author')}
  ${metaField('license')}
}`

const queries = {
  random: () => `query Random {
    random { ...itemFields }
  } ${itemFragment}`,
  search: () => `query Search($query: String!) {
    search(query: $query) {
      item { ...itemFields }
    }
  } ${itemFragment}`
}

const dicere = {
  random: observable(stub()),
  fetchRandom: action(query('random', ({ random }) => itemiser(random[0]))),

  search: observable(stub()),
  fetchSearch: action(query('search',
    ({ search }) => search.map(({ item }) => itemiser(item))
  ))
}

export default dicere

function itemiser (item) {
  item.license = item.licenseRaw.value ||
    item.dataset.licenseRaw.value ||
    'CC-BY-4.0'

  item.author = item.authorRaw.value ||
    item.dataset.authorRaw.value ||
    null

  return item
}

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
