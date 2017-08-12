import Inferno from 'inferno'
import { Link as InfernoLink } from 'inferno-router'
import c from 'classnames'

export function Link ({ href, text, className, children }) {
  return <InfernoLink to={href} className={className}>{text || children}</InfernoLink>
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
