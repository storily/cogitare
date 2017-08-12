import Inferno from 'inferno'
import { connect } from 'inferno-mobx'
import Search from './search'
import examples from './examples'
import results from './results'

export default connect(['query'], function Home ({ query }) {
  return (
    <div className='container home-search'>
      <div className='row justify-content-center'>
        <div className='col-lg-5'>
          <Search />
        </div>
      </div>
      {query.search.trim().length === 0
        ? examples()
        : results()
      }
    </div>
  )
})
