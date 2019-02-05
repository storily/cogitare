import Inferno from 'inferno'
import { connect } from 'inferno-mobx'
import { Warning } from '../util/errors'
import { Prompt } from '../util/prompt'

export default connect(['dicere'], function ItemView ({ dicere, params: { id } }) {
  const { item: { data, error, loading }, fetchItem } = dicere

  if (!(data || error)) {
    fetchItem({ variables: { id } })
  }

  return (
    <div className='container home-item'>
      <div className='row justify-content-center'>
        <div className='col-lg-9'>
          {loading ? <div className="mt-4 border text-primary text-center rounded p-2">Loading...</div> : null}
          {error ? <Warning error={error} /> : (data ? <Prompt item={data} /> : null)}
        </div>
      </div>
    </div>
  )
})
