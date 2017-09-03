import Inferno from 'inferno'
import { Link, SearchLink, TagLink } from '../util/links'

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
        <code>and</code>, <code>not</code>, or <code>or</code>. But note{' '}
        that <code>and</code> is <em>implied</em> between terms anyway, so
        you don’t need to write it.
      </p>
      <p>
        <b>Parameters:</b>{' '}
        Some tags can take “parameters”, like <SearchLink text='characters=2' />{', '}
        or <SearchLink text='nsfw:adult' />. The particulars of what parameter{' '}
        which tag takes, and how they work, are available under each tag on the{' '}
        <Link href='/tags'>Tags</Link> list, as well as each tag’s page, e.g. the{' '}
        <TagLink text='characters' /> tag page.
      </p>
      <p>
        <b>Full text:</b>{' '}
        A quoted phrase is matched against the <em>text</em> of the quote
        instead of its tags. By default the words in the phrase are{' '}
        matched in order, but for convenience the search is also done{' '}
        <em>without</em> taking order into account, and those results{' '}
        are placed underneath the default ones.
      </p>
      <p>
        <b>Normalisation:</b>{' '}
        Curly quotes that may be inserted when typing or copy-pasting
        (like “smart quotes”) automatically convert to straight ones.
        Similarly all sorts of typographic dashes are normalised to hyphens.
        All matching is case-insensitive.
      </p>
      <p>
        <b>Defaults:</b>{' '}
        All specific fandoms are excluded unless a tag that relates to them is{' '}
        searched for. Prompts that are NSFW are excluded always, unless the {' '}
        <TagLink text='nsfw' /> tag is added to the search.
      </p>
    </ExampleRow>
  ]
}
