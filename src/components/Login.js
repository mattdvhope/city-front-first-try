import React from "react";
import { Redirect } from "react-router-dom";
import validator from 'validator'; // see https://www.npmjs.com/package/validator
import classNames from 'classnames';
import axios from 'axios';
import Form from "./Form/indexTest";
import View from "./View";
import { handleLogin, isLoggedIn } from "../utils/auth";

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: {value: '', isValid: true, message: ''},
      password: {value: '', isValid: true, message: ''},
    };

    this.setState = this.setState.bind(this);
  }

  handleUpdate(event) {
    let state = this.state;
    state[event.target.name].value = event.target.value;

    state[event.target.name].message = '';
    this.setState(state);
  }

  handleSubmit(event) {
    this.resetValidationStates();
    if (this.formIsValid()) {
      let email = this.state.email.value || window.sessionStorage.email;
      email = email.toLocaleLowerCase();
      const password = this.state.password.value || window.sessionStorage.password;
      const promise = new Promise((resolve, reject) => {
        resolve(axios.post(`${process.env.GATSBY_API_URL}/sessions`, {email, password}));
      });
      promise
      .then((res) => {
        this.props.handleClose(); //..of modal
        handleLogin({email, password});
      })
      .then((res) => {
        this.setState(this.state) // to reset state once 'isLoggedIn'
      })
      .catch((err) => {
        console.log(err);
        document.getElementById('formControlsEmail').value=`${email || window.sessionStorage.email}`
        document.getElementById('formControlsPassword').value=`${password || window.sessionStorage.password}`
        window.sessionStorage.email = email === '' ? window.sessionStorage.email : email;
        window.sessionStorage.password = password === '' ? window.sessionStorage.password : password;
      });
    } 
  }

  formIsValid() {
    let state = this.state;

    if (!validator.isEmail(state.email.value)) { // see https://www.npmjs.com/package/validator
      state.email.isValid = false;
      state.email.message = 'Not a valid email address';

      this.setState(state);
      return false;
    }
    //additional validation checks here...
    return true;
  }

  resetValidationStates() {
    let state = this.state;

    Object.keys(state).map(key => {
      if (state[key].hasOwnProperty('isValid')) {

        state[key].isValid = true;
        state[key].message = '';
      }
    });
    this.setState(state);
  }

  render() {
    if (isLoggedIn()) {
      return <Redirect to={{ pathname: `/app/profile` }} />;
    }

    let {email, password} = this.state;
    let emailGroupClass = classNames('form-group', {'has-error': !email.isValid});
    let passwordGroupClass = classNames('form-group', {'has-error': !password.isValid});

    return (
      <View title="Log In">
        <Form
          handleUpdate={e => this.handleUpdate(e)}
          handleSubmit={e => this.handleSubmit(e)}
          emailMessage={email.message}
          emailValue={email.value}
          passwordMessage={password.message}
          passwordValue={password.value}
          emailGroupClass={emailGroupClass}
          passwordGroupClass={passwordGroupClass}
          validEmail={email.isValid}
        />
      </View>
    )
  }
}


