import React from "react";
import Slider from "react-slick";


  function dealWithClick() {
    alert("The Link was Clicked");
  }



export default class CarouselSlider3 extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      // autoplay: true,
      // autoplaySpeed: 7000,
      speed: 400,
      slidesToShow: 1,
      slidesToScroll: 1,
      // pauseOnHover: false,
      cssEase: "linear"
    };
    return (
      <div className="dog-food">
        <Slider {...settings}>
          <div>
              <img
                src="https://s3-ap-southeast-1.amazonaws.com/carouselcep/1Home-Page-Pic.jpg"
                className="img-responsive"
                onClick={dealWithClick}
                />
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
        <br />
        <br />
      </div>
    );
  }
}