import Inferno from 'inferno'
import { Link as InfernoLink } from 'inferno-router'
import c from 'classnames'
import spdx from 'spdx-expression-parse'
import { connect } from 'inferno-mobx'
import { asParams } from '../../stores/query'

export function Link ({ href, text, className, children, external }) {
  if (external || /^http/.test(href)) {
    return <a href={href} className={className} target={external ? '_blank' : null}>{text || children}</a>
  } else {
    return <InfernoLink to={href} className={className}>{text || children}</InfernoLink>
  }
}

const searchLinkFactory = (short, kind) => connect(['query'], function SearchLink (props) {
  const q = asParams(props.query)
  q.set(short, props.text)
  props.href = '/?' + q
  props.className = c(props.className, 'search', kind)
  return Link(props)
})

export const NameSearchLink = searchLinkFactory('n', 'nominare')

export function TagLink (props) {
  props.href = '/tag/' + props.text
  props.className = c(props.className, 'tag')
  return Link(props)
}

export function NameLink (props) {
  props.href = '/name/' + props.text
  props.className = c(props.className, 'item', 'nominare')
  return Link(props)
}

export function LicenseLink (props) {
  const license = props.spdx
  try {
    return renderLicense(spdx(license))
  } catch (e) {
    // console.debug('Error parsing SPDX license', e)
    if (/^http/.test(license)) {
      return <Link external href={license} className='nonspdx-license'>{license}</Link>
    } else {
      return <span className='license text-dark'>{license}</span>
    }
  }
}

function SPDXLink (props) {
  props.text = props.license
  props.href = `https://spdx.org/licenses/${props.license}.html`
  props.className = c(props.className, 'spdx-license')
  return Link(props)
}

function renderLicense (parsed) {
  if (parsed.license) {
    if (parsed.license.indexOf('LicenseRef') !== -1) {
      return <SPDXLink license={parsed.license} />
    } else {
      return (
        <span className='spdx-ext'>
          <SPDXLink license={parsed.license} />
          {parsed.plus ? ' or newer ' : null}
          {parsed.exception ? ' with ' + parsed.exception : null}
        </span>
      )
    }
  } else {
    return (
      <span className='spdx-group'>
        render(parsed.left)
        {` ${parsed.conjunction} `}
        render(parsed.right)
      </span>
    )
  }
}
