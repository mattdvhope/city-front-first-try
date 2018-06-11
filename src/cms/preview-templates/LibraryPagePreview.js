import React from 'react'
import PropTypes from 'prop-types'
import { LibraryPageTemplate } from '../../templates/library-page/index'

const LibaryPagePreview = ({ entry, widgetFor }) => (
  <LibraryPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

LibaryPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default LibaryPagePreview
