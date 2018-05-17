import React, { Component } from 'react';
import Link from 'gatsby-link';
import styled from "styled-components";
import { Grid, Row, Col } from 'react-bootstrap';

import cityScape from '../img/City-scape.jpg'
import cityScapeMedium from '../img/City-scape-medium.jpg'
import cityScapeSmaller from '../img/City-scape-smaller.jpg'

const FooterContainer = styled.div`
  height: 1400px
  background-repeat:no-repeat;
  background-position:center;
`

const TitleContainer = styled.div`
  color: #8BC34A;
  margin-right: 4%;
  margin-left: 4%;
`;

const SubTitleContainer = styled.div`
  color: #2d3179;
  margin-right: 8%;
  margin-left: 8%;
`;

const YouCanSpeakLink = styled(Link)`
  color: #8BC34A;
  font-weight: bold;
`; 

const Avatar = styled.img`
  height: auto;
  border-radius: 20%;
  display: block;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 1087px) {
    margin-top: 7%;
  }
  @media (max-width: 1087px) {
    margin-top: 30%;
  }

  @media (min-width: 767px) {
    max-width: 95%;
    width: 100%;
  }
  @media (max-width: 767px) {
    margin-top: 0%;
    max-width: 55%;
  }
  @media (max-width: 667px) {
    margin-top: 0%;
    max-width: 60%;
  }
  @media (max-width: 500px) {
    margin-top: 0%;
    max-width: 70%;
  }
`;

const FirstAvatar = Avatar.extend`
  @media (min-width: 1087px) {
    margin-top: 2%;
  }
  @media (max-width: 1087px) {
    margin-top: 9%;
  }

  @media (max-width: 767px) {
    margin-top: 0px;
  }
  @media (max-width: 667px) {
    margin-top: 0px;
  }
  @media (max-width: 500px) {
    margin-top: 0px;
  }
`

const ListContainer = styled.div`
  width: 95%;
  color: #2d3179;
`

const TextContainer = styled.div`
  padding-left: 1em;
  width: 95%;
  color: #2d3179;
`

const TextContent = styled.div`
  font-size: 20px;
`

function imageAccordingToScreenSize(win) {
  if (win.innerWidth > 1260) {
    return cityScape;
  } else if (win.innerWidth > 767 && win.innerWidth < 1260) {
    return cityScapeMedium;
  } else {
    return cityScapeSmaller;
  }
}

export default class Footer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      imageChosen: undefined
    };
  }

  handleResize = () => this.setState({
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
      <FooterContainer style={{backgroundImage: `url('${this.state.imageChosen}')`}}>

        <div className="container-full">
          <div className="row">
            <div className="welcome-screen">
              <div className="welcome-caption-content">

                <Grid fluid>
                  <Row>
                    <TitleContainer>
                      <h1 className="text-center">Become a City English Project Network Member!</h1>
                    </TitleContainer>
                    <SubTitleContainer>
                      <h3>Becoming a member of the City English Project is Easy! Everyone who sucessfully completes our <YouCanSpeakLink to="/about">"You Can Speak!"</YouCanSpeakLink> conversational English class will be awarded a free one-year membership to our network.  Network members will receive the following privileges:</h3>
                    </SubTitleContainer>
                  </Row>
                </Grid>

              </div>
            </div>
          </div>
        </div>

      </FooterContainer>




    )
  }
}
