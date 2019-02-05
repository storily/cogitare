import Inferno from 'inferno'
import { connect } from 'inferno-mobx'
import { Warning } from '../util/errors'
import { Prompt } from '../util/prompt'
import { Name } from '../util/name'

export default function Random () {
  return (
    <div className='container home-random'>
      <div className='row justify-content-center'>
        <RandomPrompt />
        <RandomName />
      </div>
    </div>
  )
}

const RandomPrompt = connect(['dicere'], function RandomPrompt ({ dicere }) {
  const { random: { data, error, loading }, fetchRandom } = dicere

  if (!(data || error)) {
    fetchRandom()
  }

  return (
    <div className='col-lg'>
      <button
        className='btn btn-block btn-outline-success mt-4'
        type='submit'
        onClick={fetchRandom}
        disabled={loading}
      >
        {loading ? 'Loading...' : 'Get another prompt'}
      </button>

      {error ? <Warning error={error} /> : (data ? <Prompt item={data} /> : null)}
    </div>
  )
})

const RandomName = connect(['nominare'], function RandomName ({ nominare }) {
  const { random: { data, error, loading }, fetchRandom } = nominare

  if (!(data || error)) {
    fetchRandom({ n: 2 })
  }

  return (
    <div className='col-lg'>
      <button
        className='btn btn-block btn-outline-success mt-4'
        type='submit'
        onClick={() => fetchRandom({ n: 2 })}
        disabled={loading}
      >
        {loading ? 'Loading...' : 'Get some other names'}
      </button>

      {error ? <Warning error={error} /> : (
        data.length > 0
          ? data.map(({ first, last }) => <Name first={first} last={last} />)
          : null
      )}
    </div>
  )
})
