import Inferno from 'inferno'
import { PromptSearchLink } from '../../util/links'

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
    <h2 className='try'>Try some searches:</h2>,

    <ExampleRow>
      Themes
      <p>
        <PromptSearchLink text='fantasy' />{', '}
        <PromptSearchLink text='sci-fi' />{', '}
        <PromptSearchLink text='food' />
      </p>
    </ExampleRow>,
    <ExampleRow>
      Kinds
      <p>
        <PromptSearchLink text='seed' />{', '}
        <PromptSearchLink text='dialogue' />{', '}
        <PromptSearchLink text='event' />
      </p>
    </ExampleRow>,
    <ExampleRow>
      Specifics
      <p>
        <PromptSearchLink text='raccoon friends' />{', '}
        <PromptSearchLink text='morally grey ladies' />{', '}
        <PromptSearchLink text='mundane superpower' />
      </p>
    </ExampleRow>
  ]
}
