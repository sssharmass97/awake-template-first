import { getMixins } from './mixins'

class Post {
  constructor(axios) {
    this.slug = 'page'
    this.slugPlural = 'pages'
    this.pretty = 'Page'
    this.plural = 'Pages'
    this.axios = axios
    this.editUrl = '/admin/#/collections/pages/entries'
  }
  getEditUrl(slug) {
    return `${this.editUrl}/${slug}`
  }
}

// Mixins
Object.assign(Page.prototype, getMixins)

export default Page
