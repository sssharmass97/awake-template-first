import siteConfig from '../../../config/_siteConfig'
import { createPagination, createMeta, createAll } from './helper'
const rootDir = `${__dirname}/../../..`
const generatePageApi = () => {
  const contentDir = `${rootDir}/content/pages`
  const apiDir = `${rootDir}/static/api`
  const allFile = `${apiDir}/pages.json`
  const metaFile = `${apiDir}/pages-meta.json`
  const pages = siteConfig.pages.perPage
  const doneMessage = `{totalNumber} posts generated in posts API`

  createAll(contentDir, allFile, apiDir)
    .then((all) => {
      const totalPages = createPagination(pages, all, `${apiDir}/pages`)
      createMeta({ totalPages: totalPages }, metaFile)
      console.log(doneMessage.replace('{totalNumber}', all.length))
    })
    .catch((err) => {
      console.log(err)
    })
}
export default generatePageApi
