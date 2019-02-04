import Inferno from 'inferno'
import { connect } from 'inferno-mobx'
import Search from './search'
import examples from './examples'
import Results from './results'

export default connect(['nominare', 'query'], function Names ({ nominare, query }) {
  const trimmed = query.nominare.trim()
  const empty = trimmed.length === 0

  return (
    <div>
      <h2 className='text-center mt-5 mb-3'>Names</h2>
      <div className='row justify-content-center'>
        <div className='col-lg-9'>
          <Search loading={!empty && nominare.search.loading} />
        </div>
      </div>

      {empty ? examples() : <Results query={trimmed} />}
    </div>
  )
})
