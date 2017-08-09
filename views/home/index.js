import Inferno from 'inferno'
import examples from './examples'

function Search () {
  return (
    <div className='input-group'>
      <input type='text' className='form-control form-control-lg' placeholder='Search' autoFocus='autofocus' />
      <span className='input-group-btn'>
        <button className='btn btn-success' type='button'>Search</button>
      </span>
    </div>
  )
}

export default function Home () {
  return (
    <div className='container home-search'>
      <div className='row justify-content-center'>
        <div className='col-lg-5'>
          <Search />
        </div>
      </div>
      <div className='row justify-content-center'>
        <div className='col-lg-5'>
          <h2 className='try'>Try some searches:</h2>
        </div>
      </div>
      {examples()}
    </div>
  )
}
