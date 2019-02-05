import Inferno from 'inferno'
import { NameLink, NameSearchLink } from '../util/links'

function join (items, joiner, ifEmpty = []) {
  if (items.length > 0) {
    return items.reduce((prev, curr) => [prev, joiner, curr])
  } else {
    return ifEmpty
  }
}

export function Name ({ first, last, details }) {
  return (
    <div className="card mt-4 single-item">
      <div className="card-body">
        <h4 className="card-title mb-0">
          {first ? <NameLink text={first} /> : ''}
          {' '}
          {last ? (last.map
            ? join(last.map((name) => <NameLink text={name} />), '-')
            : <NameLink text={last} />
          ) : ''}
        </h4>
        {details ? [
          <p className="mt-3 mb-0 text-muted">
          — Kinds: {join(details.kinds
              .map((kind) => <NameSearchLink text={kind} />), ', ', '(none)')}
          </p>,
          <p className="mb-0 text-muted">
          — Sources: {join(details.sources
              .map((src) => <span className='text-dark'>{src}</span>), ', ')}
          </p>,
          <p className="mb-2 text-muted">
          — Score: {details.score}
          </p>
        ] : null}
      </div>
    </div>
  )
}
