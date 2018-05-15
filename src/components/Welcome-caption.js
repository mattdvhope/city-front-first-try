import React, { Component } from 'react';
import Link from 'gatsby-link';

import '../sass/welcome.sass'

export default class WelcomeCaption extends Component {

  constructor(props) {
    super(props)
    this.welcomeWindow = window;
    this.state = {
      windowHeight: undefined,
      windowWidth: undefined
    };
  }

  handleResize = () => this.setState({
    windowHeight: window.innerHeight,
    windowWidth: window.innerWidth
  });

  componentDidMount() {
    this.welcomeWindow = window;
    this.handleResize();
    window.addEventListener('resize', () => this.handleResize);
  }

  componentWillUnmount() {
    this.welcomeWindow = window;
    window.addEventListener('resize', () => this.handleResize);
  }

  chooseImageBasedOnSize(){
    if (this.welcomeWindow.innerWidth > 550) {
      return (
        <img src="https://s3-ap-southeast-1.amazonaws.com/ccmcoversbsc/Welcome+wide.jpg" alt="wide picture" className="img-responsive" />
      );
    } else {
      return (
        <img src="https://s3-ap-southeast-1.amazonaws.com/ccmcoversbsc/Welcome+mobile.jpg" alt="mobile picture" className="img-responsive" />
      );
    }
  }

  render() {
    return (
      <div className="container-full">
        <div className="row">
          <div className="welcome-screen">
            { this.chooseImageBasedOnSize() }
            <div className="welcome-caption-content">
              The City English Project makes learning English convenient, affordable and fun!  And, we focus on what you need the most - conversational English skills. Our network offers classes, conversation partnerships and events to help you improve your conversational English. We also integrate culture and worldview elements in to our learning model to better equip your for building relationships within the ASEAN community and beyond.  We want to help you succeed in life and in business! <span id="get-to-be-a-member">Click here</span> to learn more about us. Or, <a className="modal-initiator non-summer-university"  href="#" data-toggle="modal" data-target="#applicationmodal">click here</a> to sign up for our popular "You Can Speak!" English class.
            </div>
          </div>
        </div>
      </div>
    )
  }
}
