import Inferno from 'inferno'
import c from 'classnames'

export function LoadingButton ({ className, onClick }) {
  return (
    <button className={c(className, 'loading-button')} type='button' onClick={onClick}>
      <span className='loading'></span>
      <span className='cancel'>×</span>
    </button>
  )
}
