import Inferno from 'inferno'
import { Link } from '../util/links'
import Names from './names'
import Prompts from './prompts'

export default function Home () {
  return (
    <div className='container home-search'>
      <div className='row'>
        <div className='col-lg'>
          <Prompts />
        </div>
        <div className='col-lg'>
          <Names />
        </div>
      </div>

      <div className='row my-5'>
        <div className='col text-center'>
          <Link external className='mr-2' href='https://algolia.com'>
            <img src='/assets/search-by-algolia.svg' alt='Search by Algolia' width='180' />
          </Link>
          and <span className='text-dark'>Postgres</span>
        </div>
      </div>
    </div>
  )
}
