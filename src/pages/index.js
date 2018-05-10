import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import axios from 'axios'

axios.get(`https://cityenglishproject.com/class_times.json`)
  .then(function(response){
    console.log(response.data); // ex.: { user: 'Your User'}
    console.log(response.status); // ex.: 200
  });

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

          <div style={{ margin: '3rem auto', maxWidth: 600 }}>
            <h1>Richard Hamming on Luck</h1>
            <div>
              <p>
                From Richard Hamming’s classic and must-read talk, “<a href="http://www.cs.virginia.edu/~robins/YouAndYourResearch.html">
                  You and Your Research
                </a>”.
              </p>
              <blockquote>
                <p>
                  There is indeed an element of luck, and no, there isn’t. The prepared
                  mind sooner or later finds something important and does it. So yes, it
                  is luck.{" "}
                  <em>
                    The particular thing you do is luck, but that you do something is
                    not.
                  </em>
                </p>
              </blockquote>
            </div>
            <p>Posted April 09, 2011</p>
          </div>

          <h3><Link to="blog-index">Go to blog index</Link></h3>
        </div>
      </section>
    )
  }
}



