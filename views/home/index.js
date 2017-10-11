import Inferno from 'inferno'
import { connect } from 'inferno-mobx'
import { Link } from '../util/links'
import Search from './search'
import examples from './examples'
import Results from './results'

export default connect(['dicere', 'query'], function Home ({ dicere, query }) {
  const trimmed = query.search.trim()
  const empty = trimmed.length === 0

  return (
    <div className='container home-search'>
      <div className='row justify-content-center'>
        <div className='col-lg-9'>
          <Search loading={!empty && dicere.search.loading} />
        </div>
      </div>

      {empty ? examples() : <Results query={trimmed} />}

      <Link className='algolia' href='https://algolia.com'>
        <img src='/assets/search-by-algolia.svg' alt='Search by Algolia' width='180' />
      </Link>
    </div>
  )
})
