import React, {Component} from 'react';
import { Redirect, withRouter } from "react-router-dom";
import classNames from 'classnames';
import validator from 'validator';
import axios from 'axios';
import { handleLogin, isLoggedIn } from "../utils/auth";
import Form from "./Form/indexTest";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: {value: '', isValid: true, message: ''},
      password: {value: '', isValid: true, message: ''},
    };
  }

  onChange = (e) => {
    var state = this.state;
    state[e.target.name].value = e.target.value;

    state[e.target.name].message = '';
    this.setState(state);

  }

  onSubmit = (e) => {
    e.preventDefault();
    this.resetValidationStates(); //reset states before the validation procedure is run.
    if (this.formIsValid()) { //run the validation, and if it's good move on.

      const email = this.state.email.value || window.sessionStorage.email;
      const password = this.state.password.value || window.sessionStorage.password;

      const promise = new Promise((resolve, reject) => {
        resolve(axios.post(`${process.env.GATSBY_API_URL}/sessions`, {email, password}));
      });
      promise
      .then((res) => {
        res.status === 200 ? handleLogin({email, password}) : '';
      })
      .then((res) => {
        console.log("History2: ", history);
        // history.push(`/app/profile`)
        // window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        // console.log(this.state);
        // document.getElementById('formControlsEmail').value=`${email || window.sessionStorage.email}`
        // document.getElementById('formControlsPassword').value=`${password || window.sessionStorage.password}`
        // window.sessionStorage.email = email === '' ? window.sessionStorage.email : email;
        // window.sessionStorage.password = password === '' ? window.sessionStorage.password : password;
      });

    }
  }

  formIsValid = () => {
    var state = this.state;

    if (!validator.isEmail(state.email.value)) { // see https://www.npmjs.com/package/validator
      state.email.isValid = false;
      state.email.message = 'Not a valid email address';

      this.setState(state);
      return false;
    }
    //additional validation checks here...
    return true;
  }

  resetValidationStates = () => {
    var state = this.state;

    Object.keys(state).map(key => {
      if (state[key].hasOwnProperty('isValid')) {

        state[key].isValid = true;
        state[key].message = '';
      }
    });
    this.setState(state);
  }

  render() {
    console.log(isLoggedIn());

    const { match, location, history } = this.props


    if (isLoggedIn()) {
      return <Redirect to={{ pathname: `/app/profile` }} />
    }

    var {email, password} = this.state;
    /*
    Each of the group classes below will include the 'form-group' class, and will only
    include the 'has-error' class if the isValid value is false.
    */
    var emailGroupClass = classNames('form-group', {'has-error': !email.isValid});
    var passwordGroupClass = classNames('form-group', {'has-error': !password.isValid});

    return (
      <div className="container-fluid">

        <Form
          handleUpdate={e => this.onChange(e)}
          handleSubmit={e => this.onSubmit(e)}
          emailMessage={email.message}
          emailValue={email.value}
          passwordMessage={password.message}
          passwordValue={password.value}
        />

  {/* 
        <form className="form-signin" onSubmit={this.onSubmit}>
          <h2 className="form-signin-heading">Create Account</h2>

          <div className={emailGroupClass}>
            <input type="text" name="email" className="form-control"
              placeholder="Email address" value={email.value} onChange={this.onChange} autoFocus />
            <span className="help-block">{email.message}</span>
          </div>

          <div className={passwordGroupClass}>
            <input type="password" name="password" className="form-control"
              placeholder="Password" value={password.value} onChange={this.onChange} />
            <span className="help-block">{password.message}</span>
          </div>


          <button className="btn btn-lg btn-primary btn-block" type="submit">Create Account</button>
        </form>
    */}

      </div>
    );
  }
};

export default withRouter(Login);





