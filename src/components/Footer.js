import React, { Component } from 'react';
import Link from 'gatsby-link';

import cityScape from '../img/City-scape.jpg'
import cityScapeMedium from '../img/City-scape-medium.jpg'
import cityScapeSmaller from '../img/City-scape-smaller.jpg'

import '../sass/welcome.sass'

function imageAccordingToScreenSize(win) {
  if (win.innerWidth > 1260) {
    return cityScape;
  } else if (win.innerWidth > 767 && win.innerWidth < 1260) {
    return cityScapeMedium;
  } else {
    return cityScapeSmaller;
  }
}

export default class WelcomeCaption extends Component {

  constructor(props) {
    super(props)
    this.state = {
      windowHeight: undefined,
      windowWidth: undefined,
      imageChosen: undefined
    };
    // this.chooseImage = this.chooseImage.bind(this);
  }

  handleResize = () => this.setState({
    windowHeight: window.innerHeight,
    windowWidth: window.innerWidth,
    // imageChosen: window.innerWidth > 550 ? "https://s3-ap-southeast-1.amazonaws.com/ccmcoversbsc/Welcome+wide.jpg" : "https://s3-ap-southeast-1.amazonaws.com/ccmcoversbsc/Welcome+mobile.jpg"
    imageChosen: imageAccordingToScreenSize(window)
  });

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }

  render() {
    return (
      <div className="container-full">
        <div className="row">
          <div className="welcome-screen">
            <img src={this.state.imageChosen} alt="welcome picture" className="img-responsive" />   
            <div className="welcome-caption-content">
              The City English Project makes learning English convenient, affordable and fun!  And, we focus on what you need the most - conversational English skills. Our network offers classes, conversation partnerships and events to help you improve your conversational English. We also integrate culture and worldview elements in to our learning model to better equip your for building relationships within the ASEAN community and beyond.  We want to help you succeed in life and in business! <span id="get-to-be-a-member">Click here</span> to learn more about us. Or, <a className="modal-initiator non-summer-university"  href="#" data-toggle="modal" data-target="#applicationmodal">click here</a> to sign up for our popular "You Can Speak!" English class.
            </div>
          </div>
        </div>
      </div>
    )
  }
}
