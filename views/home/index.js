import Inferno from 'inferno'
import { connect } from 'inferno-mobx'
import { Link } from '../util/links'
import Search from './search'
import examples from './examples'
import results from './results'

export default connect(['query'], function Home ({ query }) {
  return (
    <div className='container home-search'>
      <div className='row justify-content-center'>
        <div className='col-lg-9'>
          <Search />
        </div>
      </div>
      {query.search.trim().length === 0
        ? examples()
        : results(query.search.trim())
      }
      <Link className='algolia' href='https://algolia.com'>
        <img src='/assets/search-by-algolia.svg' alt='Search by Algolia' />
      </Link>
    </div>
  )
})
