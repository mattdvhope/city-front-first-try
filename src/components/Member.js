import React from "react";
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
	margin-right: 20px;
	margin-left: 20px;
`;

const Avatar = styled.img`
  height: auto;
  border-radius: 20%;
	display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;

  @media (min-width: 767px) {
	  max-width: 90%;
	  width: 100%
  }
  @media (max-width: 767px) {
	  max-width: 55%;
  }
  @media (max-width: 667px) {
	  max-width: 60%;
  }
  @media (max-width: 500px) {
	  max-width: 70%;
  }
`;

const FirstAvatar = Avatar.extend`
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

const TextContainer = styled.div`
	padding-left: 1em;
	width: 95%;
`

export default () => (
	<MemberContainer>
		<Grid fluid>
			<Row>
				<TitleContainer>
					<h1 className="text-center">Become a City English Project Network Member!</h1>
				</TitleContainer>
			</Row>
			<hr/>
			<hr/>
			<Row>
				<Col sm={6} xs={12}>
					<FirstAvatar src="https://s3-ap-southeast-1.amazonaws.com/beamember/Membership4Web.jpg" alt="" />
				</Col>
				<Col sm={6} xs={12}>
					<TextContainer>
						<h4 className={styles.subTitle}>"You Can Speak!"  Conversational English Class</h4>
						<p className={styles.text}>Our "You Can Speak!" conversational English, culture and worldview class is a fun and interactive way to build confidence and learn to speak English with greater clarity. We offer beginner through intermediate level classes taught by TESOL certified native English speakers. <a className="modal-initiator non-summer-university" href="#" data-toggle="modal" data-target="#applicationmodal">Click here to sign up for a class!</a></p>
					</TextContainer>
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
						<h4 className={styles.subTitle}>Online Conversation Partnerships with Native English Speakers</h4>
						<p className={styles.text}>The best way to become a better English speaker is to speak with native speakers on a regular basis. Our network offers members opportunities for online, weekly, face-to-face Skype partnerships with native English speakers who can help you advance quickly. This partnership will be available to you after you complete the "You Can Speak" class.</p>
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
						<h4 className={styles.subTitle}>Classes &amp; Activities!</h4>
						<p className={styles.text}>Interested in practicing your English in a casual and fun environment? We host additional classes and activities that provide opportunities for relaxed, natural conversations with native English speakers. Follow us on social media for the dates of upcoming events.</p>
					</TextContainer>
				</Col>
			</Row>
		</Grid>
	</MemberContainer>
);
