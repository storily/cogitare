import Inferno from 'inferno'
import c from 'classnames'

export function Link ({ href, text, className }) {
  return <a href={href} className={className}>{text}</a>
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
