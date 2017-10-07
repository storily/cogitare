import Inferno from 'inferno'
import { SearchLink } from '../util/links'

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
    <div className='row justify-content-center'>
      <div className='col-lg-5'>
        <h2 className='try'>Try some searches:</h2>
      </div>
    </div>,

    <ExampleRow>
      Genres and themes
      <p>
        <SearchLink text='fantasy' />{', '}
        <SearchLink text='mood' />{', '}
        <SearchLink text='science' />
      </p>
    </ExampleRow>,
    <ExampleRow>
      Fandoms
      <p>
        <SearchLink text='harry-potter' />{', '}
        <SearchLink text='star-wars' />{', '}
        <SearchLink text='werewolf' />
      </p>
    </ExampleRow>,
    <ExampleRow>
      Specifics
      <p>
        <SearchLink text='raccoon friends' />{', '}
        <SearchLink text='morally grey ladies' />{', '}
        <SearchLink text='mundane superpower' />
      </p>
    </ExampleRow>
  ]
}
