import Inferno from 'inferno'
import { PromptLink, LicenseLink, PromptSearchLink } from '../util/links'

export function Prompt ({ item }) {
  return (
    <div className="card mt-4 single-item">
      <div className="card-body">
        <h4 className="card-title">{item.text}</h4>
        <p className="mb-2 text-muted">
          <PromptLink id={item.id} />{' '}
          — Dataset: <span className='text-dark'>{item.dataset.name}</span>{' '}
          — License: <LicenseLink external spdx={item.license} />{' '}
          {item.author ? <span>— Author: <span className="text-dark">{item.author}</span></span> : null}
        </p>
        {item.tags.map(({ name }) =>
          <PromptSearchLink className='card-link' text={name} />
        )}
      </div>
    </div>
  )
}
