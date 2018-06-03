import React from "react"
import { Redirect } from "react-router-dom"
import axios from 'axios'
import Form from "./Form"
import View from "./View"
import { handleLogin, isLoggedIn } from "../utils/auth"

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: ``,
      password: ``,
      isLoggedIn: false,
    };
  }

  handleUpdate(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    handleLogin(this.state)
    this.setState({
      isLoggedIn: isLoggedIn()
    });
  }

  render() {
    if (this.state.isLoggedIn) {
      // console.log("in render & going to profile");
      return <Redirect to={{ pathname: `/app/profile` }} />
    }

    console.log(this.state.isLoggedIn);
    // console.log("in render & re-rendering Login page");

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


