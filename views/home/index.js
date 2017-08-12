import Inferno from 'inferno'
import Search from './search'
import examples from './examples'

export default function Home () {
  return (
    <div className='container home-search'>
      <div className='row justify-content-center'>
        <div className='col-lg-5'>
          <Search />
        </div>
      </div>
      {examples()}
    </div>
  )
}
