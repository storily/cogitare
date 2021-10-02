import Inferno from 'inferno'
import { Link } from '../util/links'
import Names from './names'

export default function Home () {
  return (
    <div className='container home-search'>
      <div className='row'>
        <div className='col-lg'>
          <Names />
        </div>
      </div>
    </div>
  )
}
