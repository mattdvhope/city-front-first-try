import React from "react";
import Link from "gatsby-link";
import { Carousel } from 'react-bootstrap';

import pic1 from '../img/1Home-Page-Pic.jpg'
import pic2 from '../img/2YouCanSpeakAd.jpg'
import pic3 from '../img/3FreeClass.jpg'
import pic4 from '../img/4AtYourOffice.jpg'

export default class ControlledCarousel extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      // direction: e.direction
    });
  }

  render() {
    const { index, direction } = this.state;

    return (
      <Carousel
        // activeIndex={index}
        // direction={direction}
        onSelect={this.handleSelect}
        interval={7000}
      >
        <Carousel.Item>
          <Link to="/about">
            <img src={pic1}/>
          </Link>
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Link to="/products">
            <img src={pic2}/>
          </Link>
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Link to="/about">
            <img src={pic3}/>
          </Link>
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Link to="/products">
            <img src={pic4}/>
          </Link>
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}



