import React from "react";
import Link from "gatsby-link";
import { Carousel } from 'react-bootstrap';

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
        activeIndex={index}
        direction={direction}
        onSelect={this.handleSelect}
      >
        <Carousel.Item>
          <Link to="/business">
            <img src="https://s3-ap-southeast-1.amazonaws.com/carouselcep/1Home-Page-Pic.jpg" className="img-responsive"/>
          </Link>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Link to="/business">
            <img src="https://s3-ap-southeast-1.amazonaws.com/carouselcep/2YouCanSpeakAd.jpg" alt="Chania" />
          </Link>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Link to="/business">
            <img src="https://s3-ap-southeast-1.amazonaws.com/carouselcep/4AtYourOffice.jpg" alt="Chania" />
          </Link>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Link to="/business">
            <img src="https://s3-ap-southeast-1.amazonaws.com/carouselcep/5Membership.jpg" className="img-responsive" />
          </Link>
          <Carousel.Caption>
            <h3>Fourth slide label</h3>
            <p>Fourth Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}



