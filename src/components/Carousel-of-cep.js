import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

export default class CarouselOfCep extends React.Component {
  render() {
    // const { data } = this.props
    // const { edges: posts } = data.allMarkdownRemark

    return (









<div id="myCarousel" className="carousel slide" data-ride="carousel" data-interval="4000">
  <ol className="carousel-indicators">
    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
    <li data-target="#myCarousel" data-slide-to="1"></li>
    <li data-target="#myCarousel" data-slide-to="2"></li>
    <li data-target="#myCarousel" data-slide-to="3"></li>
    <li data-target="#myCarousel" data-slide-to="4"></li>
  </ol>

  <div className="carousel-inner" role="listbox">

    <div className="item active top-front-welcome-carousel">
      <a id="general-schedule" className="modal-initiator"  href="#" data-toggle="modal" data-target="#applicationmodal">
        <img src="https://s3-ap-southeast-1.amazonaws.com/carouselcep/1Home-Page-Pic.jpg" className="img-responsive" />
      </a>
    </div>
    <div className="item top-front-welcome-carousel">
      <a className="modal-initiator" href="#" data-toggle="modal" data-target="#applicationmodal">
        <img src="https://s3-ap-southeast-1.amazonaws.com/carouselcep/2YouCanSpeakAd.jpg" alt="Chania" />
      </a>
    </div>
    <div className="item top-front-welcome-carousel">
      <a className="modal-initiator" href="/business">
        <img src="https://s3-ap-southeast-1.amazonaws.com/carouselcep/4AtYourOffice.jpg" alt="Chania" />
      </a>
    </div>
    <div className="item top-front-welcome-carousel">
      <a id="be-a-member-point">
        <img src="https://s3-ap-southeast-1.amazonaws.com/carouselcep/5Membership.jpg" className="img-responsive" />
      </a>
    </div>




      

  </div>




</div>







    )
  }
}



