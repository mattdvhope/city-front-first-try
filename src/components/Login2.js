import React from "react"
import { Redirect } from "react-router-dom"
import axios from 'axios'
import Form from "./Form"
import View from "./View"
import { handleLogin, isLoggedIn } from "../utils/auth"

// Maybe change this class to 'SessionsNew' and do it similarly to
// 'PostsNew' in the Blog app from Udemy, using the appropriate action
// and reducer -- and 'redux-promise' middleware!!  Somehow you'll need
// to set the Redux Application state (prop??) to 'isLoggedIn' or to 'isLoggedOut'

// Maybe something like this....
// - Connect the component serving your router to your Redux store.
// - Map a prop named isLoggedIn to state.auth.user != null or similar in your Redux store.
// - Conditionally serve the '/' or '/Dashboard' route based on this prop.
// - To initially set the user in your state container, you would need to write an authentication flow as appropriate to your application.

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



