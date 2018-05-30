import React from "react"
import { Redirect } from "react-router-dom"
import axios from 'axios'
import Form from "./Form"
import View from "./View"
import { handleLogin, isLoggedIn } from "../utils/auth"

let loggedIn = false;

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: ``,
      password: ``,
    };
  }

  handleUpdate(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  async handleSubmit(event) {
    event.preventDefault()

    console.log(loggedIn);

    const response = await axios.post(`${process.env.GATSBY_API_URL}/sessions`, {
      email: this.state.email,
      password: this.state.password,
    })
    .then(response => {
      loggedIn = true;      
      return loggedIn;
    })
    .catch(error => {
      return error;
    });

    console.log(response);
    return response;
    // handleLogin(this.state)
  }

  render() {
    // if (isLoggedIn()) {
    //   return <Redirect to={{ pathname: `/app/profile` }} />
    // }

    console.log("in render", loggedIn);

    if (loggedIn) {
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