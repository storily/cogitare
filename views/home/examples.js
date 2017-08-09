import Inferno from 'inferno'
import { SearchLink, TagLink } from '../util/links'

export function ExampleRow ({ children }) {
  return (
    <div className='row justify-content-center example-row'>
      <div className='col-md-2 example-name'>
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
    <ExampleRow>
      ID
      <p>
        <SearchLink text='#7' />{', '}
        <SearchLink text='#21' />{', '}
        <SearchLink text='#205' />
      </p>
    </ExampleRow>,
    <ExampleRow>
      Tags
      <p>
        <SearchLink text='fiction' />{', '}
        <SearchLink text='sci-fi characters:2' />{', '}
        <SearchLink text='magic NOT harry-potter' />
      </p>
    </ExampleRow>,
    <ExampleRow>
      Contents
      <p>
        <SearchLink text='"favourite&nbsp;food"' />{', '}
        <SearchLink text='"blue&nbsp;ladies" OR "space&nbsp;ladies"' />{', '}
        <SearchLink text='"powerful&nbsp;force" NOT star-wars' />
      </p>
    </ExampleRow>,
    <ExampleRow>
      Advanced
      <p>
        <b>Logic keywords:</b>{' '}
        <code>OR</code> or <code>NOT</code>.
        <br />
        Union (“<code>AND</code>”) is implied (by spaces) and not needed.
      </p>
      <p>
        <b>Modifiers:</b>{' '}
        <code>!</code> after a term means “exactly this”
        (<SearchLink text='harry' /> will match both{' '}
        <TagLink text='harry-dresden' /> and <TagLink text='harry-potter' />,
        but <SearchLink text='harry!' /> won’t include either).
        {' '}<code>?</code> after a term makes it optional. Results
        {' '}<em>with</em> the term will appear first. Try it with {' '}
        <SearchLink text='earthfic castle historical?' />. <code>-</code>
        {' '}<em>before</em> a term will exclude it.
      </p>
      <p>
        <b>Full text:</b>{' '}
        A quoted phrase is matched against the <em>text</em> of the quote
        instead of its tags. By default the words in the phrase are{' '}
        <em>not</em> matched in order, but appending <code>!</code> right
        after the closing quote matches the exact phrase. Compare:
        {' '}<SearchLink text='"stranger&nbsp;in&nbsp;a&nbsp;room"' /> and
        {' '}<SearchLink text='"stranger&nbsp;in&nbsp;a&nbsp;room"!' />.
      </p>
      <p>
        Curly quotes that may be inserted when typing or copy-pasting are
        (like “smart quotes”) automatically convert to straight ones.
        Similarly all sorts of typographic dashes are normalised to hyphens.
        All matching is case-insensitive.
      </p>
    </ExampleRow>
  ]
}
