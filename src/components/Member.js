import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import { Grid, Row, Col } from 'react-bootstrap';

import styles from "../sass/member.module.css";
import cityTalkClass from '../img/City-Talk-Class.jpg'
import engConvParnters from '../img/English-Conversation-Partners.jpg'
import convGroups from '../img/Conversation-Groups.jpg'

const MemberContainer = styled.div`
  padding-top: 25px;
  padding-bottom: 60px;
`

const TitleContainer = styled.div`
	color: #8BC34A;
	margin-right: 4%;
	margin-left: 4%;
`;

const SubTitleContainer = styled.div`
	color: #2d3179;
	margin-right: 4%;
	margin-left: 4%;
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

export default () => (
	<MemberContainer>
		<Grid fluid>
			<Row>
				<TitleContainer>
					<h1 className="text-center">Become a City English Project Network Member!</h1>
				</TitleContainer>
				<SubTitleContainer>
					<h3>Becoming a member of the City English Project is Easy! Everyone who sucessfully completes our <YouCanSpeakLink to="/about">"You Can Speak!"</YouCanSpeakLink> conversational English class will be awarded a free one-year membership to our network.  Network members will receive the following privileges:</h3>
				</SubTitleContainer>
			</Row>
			<hr/>
			<hr/>
			<Row>
				<Col sm={6} xs={12}>
					<FirstAvatar src="https://s3-ap-southeast-1.amazonaws.com/beamember/Membership4Web.jpg" alt="" />
				</Col>
				<Col sm={6} xs={12}>
					<ListContainer>
						<ul>
						  <li><h3>Invitations to Free English events and activities</h3></li>
						  <li><h3>Affordable English classes and seminars</h3></li>
						  <li><h3>Free conversational English worldview class (Perspectives on the world and life) and workbook</h3></li>
						  <li><h3>Ongoing opportunites to build relationships with English speakers</h3></li>
						</ul>
					</ListContainer>
				</Col>
			</Row>
			<hr/>
			<hr/>
			<Row>
				<Col sm={6} xs={12}>
					<Avatar src="https://s3-ap-southeast-1.amazonaws.com/ccmcoversbsc/Holistic+Model.jpg" alt="" />
				</Col>
				<Col sm={6} xs={12}>
					<TextContainer>
						<h3>A Holistic Model</h3>
						<TextContent>The heart of what we do is conversational English. However, everyone knows that learning English is not enough to help you excel in cross-cultural business and personal relationships. That's why our model integrates basic elements of culture and worldview into our classes. For example, in our introductory City Talk class you will learn basic tips like how to shake hands and introduce yourself in a culturally appropriate way. You will also learn an easy-to-remember outline that gives you a basic understanding of the Christian worldview - a worldview that impacts, at least in some ways, over two billion people around the world. Our online network will also offer additional classes on culture and global worldviews. We want to do all we can to equip you for a successful life and career!</TextContent>
					</TextContainer>
				</Col>
			</Row>
			<hr/>
			<hr/>
			<Row>
				<Col sm={6} xs={12}>
					<Avatar src="https://s3-ap-southeast-1.amazonaws.com/ccmcoversbsc/Friends+helping+friends.jpg" alt="" />
				</Col>
				<Col sm={6} xs={12}>
					<TextContainer>
						<h3>Serving Thai People</h3>
						<TextContent>We understand that studying English (especially with native English speakers) can be VERY expensive in Thailand.  That is one of the main reasons we started the project.  One question we often get asked is, "How are your English classes and online partnerships so affordable?" We are able to make our classes and partnerships affordable for two reasons.  First, we are a non-profit project. We exist to serve Thai people, not make money. All income is used to support and expand our services to you. Second, our TESOL certified English teachers and conversation partners are all volunteers. They are Christians who volunteer their time to serve and help the people of Thailand. They come from a <YouCanSpeakLink to="/products">long history of Christian volunteers</YouCanSpeakLink> who have loved and served Thai people.</TextContent>
					</TextContainer>
				</Col>
			</Row>
		</Grid>
	</MemberContainer>
);



