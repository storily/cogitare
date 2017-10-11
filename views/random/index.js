import Inferno from 'inferno'
import { connect } from 'inferno-mobx'
import { Warning } from '../util/errors'
import { Item } from '../util/item'

export default connect(['dicere'], function Random ({ dicere }) {
  const { random: { data, error, loading }, fetchRandom } = dicere

  if (!(data || error)) {
    fetchRandom()
  }

  return (
    <div className='container home-random'>
      <div className='row justify-content-center'>
        <div className='col-lg-12'>
          <button
            className='btn btn-block btn-outline-success mt-4'
            type='submit'
            onClick={fetchRandom}
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Get another'}
          </button>
        </div>
      </div>
      <div className='row justify-content-center'>
        <div className='col-lg-12'>
          {error ? <Warning error={error} /> : (data ? <Item item={data} /> : null)}
        </div>
      </div>
    </div>
  )
})
