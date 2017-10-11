import Inferno from 'inferno'
import { Link as InfernoLink } from 'inferno-router'
import c from 'classnames'

export function Link ({ href, text, className, children, external }) {
  if (external || /^http/.test(href)) {
    return <a href={href} className={className} target={external ? '_blank' : null}>{text || children}</a>
  } else {
    return <InfernoLink to={href} className={className}>{text || children}</InfernoLink>
  }
}

export function SearchLink (props) {
  props.href = '/?q=' + encodeURIComponent(props.text)
  props.className = c(props.className, 'search')
  return Link(props)
}

export function TagLink (props) {
  props.href = '/tag/' + props.text
  props.className = c(props.className, 'tag')
  return Link(props)
}

export function ItemLink (props) {
  props.text = `#${props.id}`
  props.href = '/item/' + props.id
  props.className = c(props.className, 'item')
  return Link(props)
}
