import Inferno from 'inferno'
import { connect } from 'inferno-mobx'
import { LoadingButton } from '../util/loading-button'
import query from '../../stores/query'
import { update } from '../../stores/history'

function updateQuery (e) {
  e.preventDefault()
  const search = e.target.q.value
  query.search = search
  update((location) => {
    location.search = '?q=' + search
  })
  return false
}

function clearQuery (e) {
  e.preventDefault()
  query.search = ''
  update((location) => {
    location.search = ''
  })
  return false
}

function Search ({ query }) {
  return (
    <form method='get' action='/' onSubmit={updateQuery}>
      <div className='input-group'>
        <input
          type='text'
          name='q'
          className='form-control form-control-lg'
          placeholder='Search'
          autoFocus='autofocus'
          value={query.search}
        />

        <span className='input-group-btn'>
          {query.search.trim().length === 0
            ? <button className='btn btn-success' type='submit'>Search</button>
            : <LoadingButton className='btn btn-outline-success' onClick={clearQuery} />
          }
        </span>
      </div>
    </form>
  )
}

export default connect(['query'], Search)
