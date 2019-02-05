import Inferno from 'inferno'
import { connect } from 'inferno-mobx'
import { LoadingButton } from '../../util/loading-button'
import query from '../../../stores/query'
import { update } from '../../../stores/history'

function updateQuery (e) {
  e.preventDefault()
  const search = e.target.q.value
  if (!search.length) return clearQuery(e)

  query.nominare = search
  update((location) => {
    location.searchParams.set('n', search)
  })
  return false
}

function clearQuery (e) {
  e.preventDefault()
  query.nominare = ''
  update((location) => {
    location.searchParams.delete('n')
  })
  return false
}

function Search ({ loading, query }) {
  return (
    <form method='get' action='/' onSubmit={updateQuery}>
      <div className='input-group'>
        <input
          type='text'
          name='q'
          className='form-control form-control-lg'
          placeholder='Query names'
          aria-label='Query names'
          autoFocus='autofocus'
          value={query.nominare}
        />

        <span className='input-group-btn search-button'>
          {loading
            ? <LoadingButton className='btn btn-outline-success' onClick={clearQuery} />
            : <button className='btn btn-success' type='submit'>Search</button>
          }
        </span>
      </div>
    </form>
  )
}

export default connect(['query'], Search)
