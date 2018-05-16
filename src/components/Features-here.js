import React from "react";
import { Grid, Row, Col } from 'react-bootstrap';

import '../sass/features-here.sass'
import styles from "../sass/features-here.module.css";
import cityTalkClass from '../img/City-Talk-Class.jpg'
import engConvParnters from '../img/English-Conversation-Partners.jpg'
import convGroups from '../img/Conversation-Groups.jpg'



export default () => (
	<div className="container-full">
		<Grid>
			<Row>
				<h1></h1>
			</Row>
		</Grid>
		<Grid>
			<Row>
				<h1 className="text-center"><span className={styles.title}>Features</span></h1>
			</Row>
		</Grid>
		<Grid>
			<Row className="show-grid">
				<Col xs={12} sm={4}>
					<img src={cityTalkClass} alt="City Talk Class" align="middle" className="img-responsive" />
					<div className={styles.belowCircle}>
						<h4 className={styles.textColor}>"You Can Speak!"  Conversational English Class</h4>
						<p>Our "You Can Speak!" conversational English, culture and worldview class is a fun and interactive way to build confidence and learn to speak English with greater clarity. We offer beginner through intermediate level classes taught by TESOL certified native English speakers. <a className="modal-initiator non-summer-university" href="#" data-toggle="modal" data-target="#applicationmodal">Click here to sign up for a class!</a></p>
					</div>
				</Col>
				<Col xs={12} sm={4}>
					<img src={engConvParnters} alt="English Conversation Partners" align="middle" className="img-responsive" />
					<div className={styles.belowCircle}>
						<h4 className={styles.textColor}>Online Conversation Partnerships with Native English Speakers</h4>
						<p>The best way to become a better English speaker is to speak with native speakers on a regular basis. Our network offers members opportunities for online, weekly, face-to-face Skype partnerships with native English speakers who can help you advance quickly. This partnership will be available to you after you complete the "You Can Speak" class.</p>
					</div>
				</Col>
				<Col xs={12} sm={4}>
					<img src={convGroups} alt="Conversation Groups" align="middle" className="img-responsive" />
					<div className={styles.belowCircle}>
						<h4 className={styles.textColor}>Classes &amp; Activities!</h4>
						<p>Interested in practicing your English in a casual and fun environment? We host additional classes and activities that provide opportunities for relaxed, natural conversations with native English speakers. Follow us on social media for the dates of upcoming events.</p>
					</div>
				</Col>
			</Row>
		</Grid>
	</div>
);





// import React, { Component } from 'react';
// import { Grid, Row, Col } from 'react-bootstrap';

// import '../sass/features-here.sass'
// // import styles from "../sass/features-here.module.css";
// import cityTalkClass from '../img/City-Talk-Class.jpg'
// import engConvParnters from '../img/English-Conversation-Partners.jpg'
// import convGroups from '../img/Conversation-Groups.jpg'

// export default class FeaturesHere extends Component {

// 	render() {
// 		const dummySentences = [
// 			'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
// 			'Donec hendrerit tempor tellus.',
// 			'Donec pretium posuere tellus.',
// 			'Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.',
// 			'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
// 			'Nulla posuere.',
// 			'Donec vitae dolor.',
// 			'Nullam tristique diam non turpis.',
// 			'Cras placerat accumsan nulla.',
// 			'Nullam rutrum.',
// 			'Nam vestibulum accumsan nisl.'
// 		];

// 		return (
// 			<div className="container-full features">
// 				<Grid>
// 					<Row>
// 						<h1 className="text-center">Features</h1>
// 					</Row>
// 				</Grid>
// 				<Grid>
// 					<Row className="show-grid">
// 						<Col xs={12} sm={4}>
// 							<img src={cityTalkClass} alt="City Talk Class" align="middle" className="img-responsive" />
// 							<div>
// 				{/* 	<div className={styles.circle}>  */}	
// 								<h4>"You Can Speak!"  Conversational English Class</h4>
// 								<p>Our "You Can Speak!" conversational English, culture and worldview class is a fun and interactive way to build confidence and learn to speak English with greater clarity. We offer beginner through intermediate level classes taught by TESOL certified native English speakers. <a className="modal-initiator non-summer-university" href="#" data-toggle="modal" data-target="#applicationmodal">Click here to sign up for a class!</a></p>
// 							</div>
// 						</Col>
// 						<Col xs={12} sm={4}>
// 							<img src={engConvParnters} alt="English Conversation Partners" align="middle" className="img-responsive" />
// 							<div>
// 				{/* 	<div className={styles.circle}>  */}	
// 								<h4>Online Conversation Partnerships with Native English Speakers</h4>
// 								<p>The best way to become a better English speaker is to speak with native speakers on a regular basis. Our network offers members opportunities for online, weekly, face-to-face Skype partnerships with native English speakers who can help you advance quickly. This partnership will be available to you after you complete the "You Can Speak" class.</p>
// 							</div>
// 						</Col>
// 						<Col xs={12} sm={4}>
// 							<img src={convGroups} alt="Conversation Groups" align="middle" className="img-responsive" />
// 							<div>
// 				{/* 	<div className={styles.circle}>  */}	
// 								<h4>Classes &amp; Activities!</h4>
// 								<p>Interested in practicing your English in a casual and fun environment? We host additional classes and activities that provide opportunities for relaxed, natural conversations with native English speakers. Follow us on social media for the dates of upcoming events.</p>
// 							</div>
// 						</Col>
// 					</Row>
// 				</Grid>
// 			</div>
// 		)
// 	}

// }