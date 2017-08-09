import Inferno from 'inferno'

export function Nav () {
  return (
    <nav className='navbar navbar-toggleable navbar-light sticky-top'>
      <a className='navbar-brand' href='/'>
        <img alt='Cogitare' src='/assets/icon.svg' height='64' />
      </a>

      <ul className='navbar-nav mr-auto'>
        <li className='nav-item'>
          <a className='nav-link' href='/'>Home</a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='/random'>Random</a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='/tags'>Tags</a>
        </li>
      </ul>

      <ul className='navbar-nav ml-auto'>
        <li className='nav-item'>
          <a className='nav-link' href='/docs'>About</a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='/docs/bots'>Bots</a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='/docs/submit'>Submit</a>
        </li>
      </ul>

      <a className='btn btn-outline-success my-2 my-sm-0' href='/login'>Login</a>
    </nav>
  )
}
