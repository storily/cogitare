import Inferno from 'inferno'
import { connect } from 'inferno-mobx'
import { Warning } from '../util/errors'
import { Item } from '../util/item'

const last = {}
export default connect(['dicere'], function Results ({ dicere, query }) {
  const { search: { data, error, loading }, fetchSearch } = dicere

  if (!(data || error) || last.query !== query) {
    fetchSearch({ variables: { query } })
  }

  last.query = query
  return loading
    ? <span>Loading...</span>
    : (error
      ? <Warning error={error} />
      : <div>{data.map((item) => <Item item={item} />)}</div>
    )
})
