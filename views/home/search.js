import Inferno from 'inferno'
import { connect } from 'inferno-mobx'
import { update } from '../../stores/history'
import query from '../../stores/query'

function updateQuery (e) {
  e.preventDefault()
  const search = e.target.q.value
  query.search = search
  update((location) => {
    location.search = '?q=' + search
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
          <button className='btn btn-success' type='submit'>Search</button>
        </span>
      </div>
    </form>
  )
}

export default connect(['query'], Search)
