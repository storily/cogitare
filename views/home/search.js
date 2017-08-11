import Inferno from 'inferno'
import { connect } from 'inferno-mobx'

function Search ({ query }) {
  return (
    <form method='get' action='/'>
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
