import Inferno from 'inferno'
import { Link } from '../util/links'

export function Nav () {
  return (
    <nav className='navbar navbar-expand-sm navbar-light sticky-top'>
      <Link className='navbar-brand' href='/'>
        <img alt='Cogitare' src='/assets/icon.svg' height='64' />
      </Link>

      <ul className='navbar-nav mr-auto'>
        <li className='nav-item'>
          <Link className='nav-link' href='/'>Home</Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' href='/random'>Random</Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' href='/tags'>Tags</Link>
        </li>
      </ul>

      <ul className='navbar-nav ml-auto'>
        <li className='nav-item'>
          <Link className='nav-link' href='/docs'>About</Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' href='/docs/bots'>Bots</Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' href='/docs/submit'>Submit</Link>
        </li>
      </ul>

      <Link className='btn btn-outline-success my-2 my-sm-0' href='/login'>Login</Link>
    </nav>
  )
}
