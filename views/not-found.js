import Inferno from 'inferno'

export default function NotFound () {
  return (
    <div className='container not-found text-center'>
      <div className='row justify-content-center'>
        <div className='col-md'>
          <h2>Not Found</h2>
        </div>
      </div>
      <div className='row justify-content-center'>
        <div className='col-md'>
          <p>Took a wrong turn somewhere mate.</p>
        </div>
      </div>
    </div>
  )
}
