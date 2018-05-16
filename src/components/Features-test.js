import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

export default class FeaturesTest extends Component {

	render() {
	  const dummySentences = [
		  'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
		  'Donec hendrerit tempor tellus.',
		  'Donec pretium posuere tellus.',
		  'Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.',
		  'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
		  'Nulla posuere.',
		  'Donec vitae dolor.',
		  'Nullam tristique diam non turpis.',
		  'Cras placerat accumsan nulla.',
		  'Nullam rutrum.',
		  'Nam vestibulum accumsan nisl.'
		];

    return (
    	<div className="container-full">
	    	<Grid>
			    <Row className="show-grid">
			      <Col xs={12} sm={4}>
			        <img src="https://s3-ap-southeast-1.amazonaws.com/ccmcoversbsc/City+Talk+Class.jpg" alt="City Talk Class" align="middle" className="img-responsive" />
			      	<div>
			      		<h2>Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text </h2>
			      	</div>
			      </Col>
			      <Col xs={12} sm={4}>
			        <img src="https://s3-ap-southeast-1.amazonaws.com/ccmcoversbsc/English+Conversation+Partners.jpg" alt="English Conversation Partners" align="middle" className="img-responsive" />
			      	<div>
			      		<h2>Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text </h2>
			      	</div>
			      </Col>
			      <Col xs={12} sm={4}>
			        <img src="https://s3-ap-southeast-1.amazonaws.com/ccmcoversbsc/Conversation+Groups.jpg" alt="Conversation Groups" align="middle" className="img-responsive" />
			      	<div>
			      		<h2>Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text Some text </h2>
			      	</div>
			      </Col>
			    </Row>
			  </Grid>
		  </div>
    )
  }

}