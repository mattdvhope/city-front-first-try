import React, { PropTypes } from 'react'
import { Grid, Row, Col } from 'react-bootstrap';

export default class User extends React.Component {
  constructor(props, _railsContext) {
    super(props);
  }
  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col span={12} offset={6}>
              This section is for logged users.
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}