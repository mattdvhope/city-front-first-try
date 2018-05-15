import React, { Component } from 'react';
import Link from 'gatsby-link';

import '../sass/welcome.sass'

export default class WelcomeCaption extends Component {

  constructor(props) {
    super(props)
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
    this.handleResize();
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }

  render() {
    return (
      <span>
        {this.state.windowWidth} x {this.state.windowHeight}
      </span>
    );
  }


}
