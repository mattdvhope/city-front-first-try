import React, { Component } from "react";
import Slider from "react-slick";

export default class AsNavFor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  render() {
    return (
      <div>
        <Slider
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
        >
          <div>
            <a id="general-schedule" className="modal-initiator"  href="#" data-toggle="modal" data-target="#applicationmodal">
              <img src="https://s3-ap-southeast-1.amazonaws.com/carouselcep/1Home-Page-Pic.jpg" className="img-responsive" />
            </a>
          </div>
          <div>
            <a className="modal-initiator" href="#" data-toggle="modal" data-target="#applicationmodal">
              <img src="https://s3-ap-southeast-1.amazonaws.com/carouselcep/2YouCanSpeakAd.jpg" alt="Chania" />
            </a>
          </div>
          <div>
            <a className="modal-initiator" href="/business">
              <img src="https://s3-ap-southeast-1.amazonaws.com/carouselcep/4AtYourOffice.jpg" alt="Chania" />
            </a>
          </div>
          <div>
            <a id="be-a-member-point">
              <img src="https://s3-ap-southeast-1.amazonaws.com/carouselcep/5Membership.jpg" className="img-responsive" />
            </a>
          </div>
        </Slider>
        <h4>Second Slider</h4>
        <Slider
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          slidesToShow={2}
          swipeToSlide={true}
          focusOnSelect={true}
          dots={true}
        >
          <div>
            <img src="https://s3-ap-southeast-1.amazonaws.com/carouselcep/1Home-Page-Pic.jpg" className="img-responsive" />
          </div>
          <div>
            <img src="https://s3-ap-southeast-1.amazonaws.com/carouselcep/2YouCanSpeakAd.jpg" alt="Chania" />
          </div>
          <div>
            <img src="https://s3-ap-southeast-1.amazonaws.com/carouselcep/4AtYourOffice.jpg" alt="Chania" />
          </div>
          <div>
            <img src="https://s3-ap-southeast-1.amazonaws.com/carouselcep/5Membership.jpg" className="img-responsive" />
          </div>
        </Slider>
        <br/>
        <br/>
      </div>
    );
  }
}