import Inferno from 'inferno'
import { connect } from 'inferno-mobx'
import { Warning } from '../util/errors'
import { Name } from '../util/name'

export default connect(['nominare'], function ItemView ({ nominare, params: { id } }) {
  const { item: { data, error, loading }, fetchItem } = nominare

  if (!(data || error)) {
    fetchItem({ name: id })
  }

  return (
    <div className='container home-item'>
      <div className='row justify-content-center'>
        <div className='col-lg-9'>
          {loading ? <div className="mt-4 border text-primary text-center rounded p-2">Loading...</div> : null}
          {error ? <Warning error={error} /> : (data ? [
            (data.first && [<h4 className='mt-5'>As first name:</h4>,
              <Name first={data.first.name} details={data.first} />]),
            (data.last && [<h4 className='mt-5'>As last name:</h4>,
              <Name last={data.last.name} details={data.last} />])
          ].filter(n => n) : null)}
        </div>
      </div>
    </div>
  )
})
