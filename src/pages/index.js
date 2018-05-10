import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import axios from 'axios'

export default class FrontPage extends React.Component {
  render() {
    // const { data } = this.props
    // const { edges: posts } = data.allMarkdownRemark

    return (
      <section className="section">
        <div className="container">
          <div className="content">
            <h1 className="has-text-weight-bold is-size-2">Latestttt Stories</h1>
          </div>

          <h1>Hello from FRONT PAGE</h1>

          <h3><Link to="blog-index">Go to blog index</Link></h3>
        </div>
      </section>
    )
  }
}


// axios.get(`https://cityenglishproject.com/class_times.json`)
//   .then(function(response){
//     console.log(response.data); // ex.: { user: 'Your User'}
//     console.log(response.status); // ex.: 200
//   });

