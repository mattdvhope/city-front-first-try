import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from 'axios';
import Form from "./Form";
import View from "./View";
import { handleLogin, isLoggedIn } from "../utils/auth";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: ``,
      password: ``
    };

    this.setState = this.setState.bind(this);
  }

  handleUpdate(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault()
    const email = this.state.email || window.sessionStorage.email;
    const password = this.state.password || window.sessionStorage.password;

    const promise = new Promise((resolve, reject) => {
      resolve(axios.post(`${process.env.GATSBY_API_URL}/sessions`, {email, password}));
    });
    promise
    .then((res) => {
      res.status === 200 ? handleLogin({email, password}) : '';
    })
    .then((res) => {
      window.location.reload();
    })
    .catch((err) => {
      document.getElementById('formControlsEmail').value=`${this.state.email || window.sessionStorage.email}`
      document.getElementById('formControlsPassword').value=`${this.state.password || window.sessionStorage.password}`
      window.sessionStorage.email = this.state.email === '' ? window.sessionStorage.email : this.state.email;
      window.sessionStorage.password = this.state.password === '' ? window.sessionStorage.password : this.state.password;
    });
  }

  render() {
    if (isLoggedIn()) {
      return <Redirect to={{ pathname: `/app/profile` }} />
    }
    
    let {email, password} = this.state;

    return (
      <View title="Log In">
        <div className="container">
          <form className="form-signin" onSubmit={this.onSubmit}>
            <h2 className="form-signin-heading">Create Account</h2>

            <div className="form-group">
              <input type="text" name="email" className="form-control"
                placeholder="Email address" value={email} onChange={this.onChange} autoFocus />
              <span className="help-block"></span>
            </div>

            <div className="form-group">
              <input type="password" name="password" className="form-control"
                placeholder="Password" value={password} onChange={this.onChange} />
              <span className="help-block"></span>
            </div>

            <button className="btn btn-lg btn-primary btn-block" type="submit">Create Account</button>
          </form>
        </div>
      </View>
    )
  }
}


