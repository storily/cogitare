import Inferno from 'inferno'

export function Warning ({ error }) {
  return (
    <div className="alert alert-warning" role="alert">
      {JSON.stringify(error)}
    </div>
  )
}
