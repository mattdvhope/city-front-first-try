import CMS from 'netlify-cms'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import LibraryPagePreview from './preview-templates/LibraryPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'
import FabulousPagePreview from './preview-templates/FabulousPagePreview'

CMS.registerPreviewStyle('/styles.css')
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('library', LibraryPagePreview)
CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('fabulous', FabulousPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
