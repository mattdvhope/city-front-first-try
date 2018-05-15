import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

export default class FeaturesHere extends React.Component {
  render() {
    // const { data } = this.props
    // const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="container-full features" id="features">
        <h2 className="text-center features-text">Features</h2>
        <div className="row">
          <div className="col-xs-12 col-sm-4">  
            <div className="picturing">
              <img src="https://s3-ap-southeast-1.amazonaws.com/ccmcoversbsc/City+Talk+Class.jpg" alt="City Talk Class" align="middle" className="img-responsive" />
            </div>
            <div className="col-md-12 col-sm-offset-1 col-md-offset-1 col-lg-offset-2 col-sm-10 icon-text-box text-under-circle">
              <h4>"You Can Speak!"  Conversational English Class</h4>
              <p>Our "You Can Speak!" conversational English, culture and worldview class is a fun and interactive way to build confidence and learn to speak English with greater clarity. We offer beginner through intermediate level classes taught by TESOL certified native English speakers. <a className="modal-initiator non-summer-university" href="#" data-toggle="modal" data-target="#applicationmodal">Click here to sign up for a class!</a>
              </p>
            </div>
          </div>
          <div className="col-xs-12 col-sm-4"> 
            <div className="picturing">
              <img src="https://s3-ap-southeast-1.amazonaws.com/ccmcoversbsc/English+Conversation+Partners.jpg" alt="English Conversation Partners" align="middle" className="English Conversation Partners" />
            </div>
            <div className="col-md-12 col-sm-offset-1 col-md-offset-1 col-lg-offset-2 col-sm-10 icon-text-box text-under-circle">
              <h4>Online Conversation Partnerships with Native English Speakers</h4>
              <p>The best way to become a better English speaker is to speak with native speakers on a regular basis. Our network offers members opportunities for online, weekly, face-to-face Skype partnerships with native English speakers who can help you advance quickly. This partnership will be available to you after you complete the "You Can Speak" class.</p>
            </div>
          </div>
          <div className="col-xs-12 col-sm-4">  
            <div className="picturing">
              <img src="https://s3-ap-southeast-1.amazonaws.com/ccmcoversbsc/Conversation+Groups.jpg" alt="Conversation Groups" align="middle" className="img-responsive" />
            </div>
            <div className="col-md-12 col-sm-offset-1 col-md-offset-1 col-lg-offset-2 col-sm-10 icon-text-box text-under-circle">
              <h4>Classes &amp; Activities!</h4>
              <p>Interested in practicing your English in a casual and fun environment? We host additional classes and activities that provide opportunities for relaxed, natural conversations with native English speakers. Follow us on social media for the dates of upcoming events.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}



