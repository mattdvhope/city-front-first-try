import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import axios from 'axios'

import ControlledCarousel from '../components/Carousel'
import WelcomeCaption from '../components/Welcome-caption'
import FeaturesHere from '../components/Features-here'
import Member from '../components/Member'
import Footer from '../components/Footer'

export default class FrontPage extends React.Component {
  render() {
    return (
        <div>
          <ControlledCarousel />
          <WelcomeCaption />
          <FeaturesHere />
          <Member />
          <Footer />
        </div>
    )
  }
}
