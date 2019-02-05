import Inferno from 'inferno'
import { NameLink, LicenseLink, NameSearchLink } from '../util/links'

export function Name ({ first, last, details }) {
  return (
    <div className="card mt-4 single-item">
      <div className="card-body">
        <h4 className="card-title mb-0">
          {first ? <NameLink text={first} /> : ''}
          {' '}
          {last ? (last.map
            ? last.map((name) => <NameLink text={name} />)
                  .reduce((prev, curr) => [prev, '-', curr])
            : <NameLink text={last} />
          ) : ''}
        </h4>
        {details ? <p className="mt-3 mb-2 text-muted">
          — Kinds: {details.kinds.map((kind) => <NameSearchLink text={kind} />)}
        </p> : null}
      </div>
    </div>
  )
}
