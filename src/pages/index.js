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
          <ControlledCarousel
            carouselImage1={this.props.data.carouselImage1}
            carouselImage2={this.props.data.carouselImage2}
            carouselImage3={this.props.data.carouselImage3}
            carouselImage4={this.props.data.carouselImage4}
          />
          <WelcomeCaption />
          <FeaturesHere />
          <Member />
          <Footer />
        </div>
    )
  }
}

export const pageQuery1 = graphql`
  query CarouselImage1Query {
    carouselImage1: imageSharp(id: { regex: "/1Home-Page-Pic/" }) {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
      }
    }
    carouselImage2: imageSharp(id: { regex: "/2YouCanSpeakAd/" }) {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
      }
    }
    carouselImage3: imageSharp(id: { regex: "/3FreeClass/" }) {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
      }
    }
    carouselImage4: imageSharp(id: { regex: "/4AtYourOffice/" }) {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`


