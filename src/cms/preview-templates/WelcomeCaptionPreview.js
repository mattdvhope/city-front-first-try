import React from 'react';
import PropTypes from 'prop-types';
import WelcomeCaption from '../../templates/home-page/WelcomeCaption';

const WelcomePagePreview = ({ entry }) => {

  return (
    <WelcomeCaption
      description={entry.getIn(['data', 'description'])}
    />
  )
}

WelcomePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default WelcomePagePreview
