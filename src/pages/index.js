import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import axios from 'axios'

import CarouselSlider from '../components/Carousel-slider'
// import FeaturesOfCep from '../components/Features-of-cep'


axios.get(`https://enigmatic-castle-3874.herokuapp.com/class_times.json`)
  .then(function(response){
    console.log(response.data); // ex.: { user: 'Your User'}
    console.log(response.status); // ex.: 200
  });

export default class FrontPage extends React.Component {
  render() {
    // const { data } = this.props
    // const { edges: posts } = data.allMarkdownRemark

    return (
        <div>
          <CarouselSlider />
        </div>
    )
  }
}



