import Inferno from 'inferno'
import { connect } from 'inferno-mobx'
import { Warning } from '../../util/errors'
import { Name } from '../../util/name'

const last = {}
export default connect(['nominare'], function Results ({ nominare, query }) {
  const { search: { data, error, loading }, fetchSearch } = nominare

  if (!(data || error) || last.query !== query) {
    fetchSearch({ q: query })
  }

  last.query = query

  if (loading) {
    return (
      <div className="card mt-4">
        <div className="card-body">
          <h4 className="card-title text-center">.&nbsp;.&nbsp;. loading .&nbsp;.&nbsp;.</h4>
        </div>
      </div>
    )
  } else if (error) {
    return <Warning error={error} />
  } else {
    return (
      <div>{
        data.length > 0
          ? data.map(({ first, last }) => <Name first={first} last={last} />)
          : 'No results'
      }</div>
    )
  }
})
