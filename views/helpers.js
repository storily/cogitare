const html = require('choo/html')

exports.href = href
function href (url, text) {
  return html`<a href="${url}">${text}</a>`
}

exports.tagHref = tagHref
function tagHref (tag) {
  return href(`/tag/${tag}`, tag)
}

exports.searchHref = searchHref
function searchHref (query) {
  return href(`/?q=${encodeURIComponent(query.replace(/\s+/g, '+'))}`, query)
}
