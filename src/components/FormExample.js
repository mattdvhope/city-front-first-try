import React, { Component } from 'react';
import Link from 'gatsby-link';
import styled from "styled-components";
import axios from 'axios'
import { FormGroup, ControlLabel, FormControl, HelpBlock, Checkbox, Radio, Button } from 'react-bootstrap';

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

export default class FormExample extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: '',
      csrf_token: csrf_token,
      class_times: []
    };
  }

  componentDidMount() {
    axios.get(`https://enigmatic-castle-3874.herokuapp.com/class_times.json`)
      .then((response) => {
        console.log(response.data); // ex.: { user: 'Your User'}
        console.log(response.status); // ex.: 200

        const class_times = response.data;
        this.setState({ class_times });
      });
  }

  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
    return null;
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  addNewUser = () => {
    axios.post(
      'https://enigmatic-castle-3874.herokuapp.com/sessions',
        {
          email: 'matt@test.tv',
          password: 'password'
        }
    )
    .then(response => {
      console.log(response)
    })
    .catch(error => console.log(error))
  }

  render() {
    return (
      <form onSubmit={this.addNewUser} noValidate="noValidate" encType="multipart/form-data" action="/users" acceptCharset="UTF-8">
        <input type="hidden" name="utf8" value="✓" />
        <input type="hidden" name="authenticity_token" value="{this.state.csrf_token}" />
        <input type="hidden" name="guest" value="true" />

        <FieldGroup
          id="formControlsText"
          name="nickname"
          type="text"
          label="Nickname"
          placeholder="Enter nickname"
        />
        <FieldGroup
          id="formControlsText"
          name="first_name"
          type="text"
          label="First Name"
          placeholder="Enter first name"
        />
        <FieldGroup
          id="formControlsText"
          name="last_name"
          type="text"
          label="Last Name"
          placeholder="Enter last name"
        />

        <FormGroup controlId="formControlsSelect">
          <ControlLabel>Select Gender</ControlLabel>
          <FormControl
            componentClass="select"
            placeholder="select gender"
            name="gender">
            <option value="ผู้ชาย">ผู้ชาย</option>
            <option value="ผู้หญิง">ผู้หญิง</option>
          </FormControl>
        </FormGroup>

        <FieldGroup
          id="formControlsText"
          name="phone_number"
          type="text"
          label="Phone Number"
          placeholder="Enter phone number"
        />
        <FieldGroup
          id="formControlsEmail"
          name="email"
          type="email"
          label="Email address"
          placeholder="Enter email"
        />
      {/* 
        <FieldGroup
          id="formControlsPassword"
          type="password"
          label="Password"
          placeholder="Enter password"
        />
      */}

        <FormGroup controlId="formControlsSelect">
          <ControlLabel>Select</ControlLabel>
          <FormControl
            componentClass="select"
            placeholder="select class time"
            name="class_time_scheduled_1">
            <option value="select">select</option>
            {this.state.class_times.map((e, key) => {
              return <option key={e.period} value={e.period}>{e.period}</option>;
            })}
          </FormControl>
        </FormGroup>

    {/* <Button type="submit" >Submit</Button> */}
        <Button onClick={this.addNewUser}>Submit</Button>
      </form>
    );
  }
}
