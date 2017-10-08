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
        <div className='col-lg-9'>
          {loading
            ? 'Loading...'
            : (error
              ? <Warning error={error} />
              : <Item item={data} />
            )
          }
        </div>
      </div>
    </div>
  )
})
