import Inferno from 'inferno'
import { TagLink } from '../util/links'

export function Item ({ item }) {
  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">#{item.id}</h4>
        <h6 className="card-subtitle mb-2 text-muted">Dataset: {item.dataset.name}</h6>
        <p className="card-text">{item.text}</p>
        {item.tags.map(({ name }) =>
          <TagLink className='card-link' text={name} />
        )}
      </div>
    </div>
  )
}
