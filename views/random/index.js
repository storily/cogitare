import Inferno from 'inferno'
import { connect } from 'inferno-mobx'
import { Item } from '../util/item'

export default connect(['dicere'], function Random ({ dicere }) {
  const { random: { data, error, loading }, fetchRandom } = dicere

  if (!(data || error))
    fetchRandom()

  return (
    <div className='container home-random'>
      <div className='row justify-content-center'>
        <div className='col-lg-9'>
          {loading
            ? 'Loading...'
            : (error
              ? <Err error={error} />
              : <Item item={data} />
            )
          }
        </div>
      </div>
    </div>
  )
})

function Err ({ error }) {
  return (
    <div className="alert alert-warning" role="alert">
      {`${error}`}
    </div>
  )
}
