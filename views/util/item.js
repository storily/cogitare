import Inferno from 'inferno'
import { ItemLink, SearchLink } from '../util/links'

export function Item ({ item }) {
  return (
    <div className="card mt-4 single-item">
      <div className="card-body">
        <h4 className="card-title">{item.text}</h4>
        <p className="mb-2 text-muted">
          <ItemLink id={item.id} />{' '}
          — Dataset: <span className='text-dark'>{item.dataset.name}</span>{' '}
        </p>
        {item.tags.map(({ name }) =>
          <SearchLink className='card-link' text={name} />
        )}
      </div>
    </div>
  )
}
