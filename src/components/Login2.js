import React from "react";
import { Redirect } from "react-router-dom";
import axios from 'axios';
import Form from "./Form";
import View from "./View";
import { handleLogin, isLoggedIn } from "../utils/auth";

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: ``,
      password: ``,
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

    return (
      <View title="Log In">
        <Form
          handleUpdate={e => this.handleUpdate(e)}
          handleSubmit={e => this.handleSubmit(e)}
        />
      </View>
    )
  }
}



