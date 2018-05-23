import React, { Component } from 'react';
import Link from 'gatsby-link';
import axios from 'axios';
import { FormGroup, ControlLabel, FormControl, HelpBlock, Checkbox, Radio, Button } from 'react-bootstrap';

import { withRouter } from 'react-router-dom';

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

class FormApplication extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange = e => {
    console.log(e.target.value)
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit = e => {
    e.preventDefault();

    axios.post(`${process.env.GATSBY_API_URL}/sessions`, {
      utf8: "✓",
      email: this.state.email,
      password: this.state.password,
    })
    .then(response => {
      console.log(response);
      this.props.history.push("/products");
      this.props.handleClose();
    })
    .catch(error => console.log(error))
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} noValidate="noValidate" encType="multipart/form-data" action="/" acceptCharset="UTF-8">
        <input type="hidden" name="utf8" value="✓" />
        <FieldGroup
          id="formControlsEmail"
          label="Email address"
          name="email"
          type="email"
          onChange={this.handleChange}
          placeholder="Enter email"
        />
        <FieldGroup
          id="formControlsPassword"
          label="Password"
          name="password"
          type="password"
          onChange={this.handleChange}
          placeholder="Enter password"
        />
        <Button type="submit">Submit</Button>
      </form>
    );
  }
}

export default withRouter(FormApplication);

