import Inferno from 'inferno'
import { NameSearchLink } from '../../util/links'

export function ExampleRow ({ children }) {
  return (
    <div className='row justify-content-center example-row'>
      <div className='col-md-3 example-name'>
        {children.shift()}
      </div>
      <div className='col-md-6 example-hint'>
        {children}
      </div>
    </div>
  )
}

export default function examples () {
  return [
    <h2 className='try'>Try some queries:</h2>,

    <ExampleRow>
      Language
      <p>
        <NameSearchLink text='english' />{', '}
        <NameSearchLink text='french' />{', '}
        <NameSearchLink text='māori' />{', '}
      </p>
    </ExampleRow>,
    <ExampleRow>
      Origin
      <p>
        <NameSearchLink text='aboriginal' />{', '}
        <NameSearchLink text='latin' />{', '}
        <NameSearchLink text='indian' />
      </p>
    </ExampleRow>,
    <ExampleRow>
      Number
      <p>
        <NameSearchLink text='20 first' />{', '}
        <NameSearchLink text='two last' />{', '}
        <NameSearchLink text='15 men' />
      </p>
    </ExampleRow>
  ]
}
