import React from "react"
import { Redirect } from "react-router-dom"
import axios from 'axios'
import Form from "./Form"
import View from "./View"
import { handleLogin, isLoggedIn } from "../utils/auth"

function wrapWithLoggedInUser(WrappedComponent) {
  return class Enhancer extends React.Component {

    render() {
      return (
        <div>
          <h1>Hello!!!!!</h1>
          <WrappedComponent headerProp = {42} />
        </div>
      )
    }
  }
}


let _this;

class Login2 extends React.Component {
  constructor(props) {
    super(props);

    console.log(props);

    this.state = {
      email: ``,
      password: ``,
      isLoggedIn: false,
    };
  }

  componentDidMount() {
    console.log(this.props);
    _this = this;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(this.state.isLoggedIn);
  }


  handleUpdate(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  async handleSubmit(event) {
    event.preventDefault()
    await handleLogin(this.state)
      .then(response => _this.setState({isLoggedIn: isLoggedIn()}))
      .catch(err => { console.log(err) });
  }

  render() {
    if (isLoggedIn()) {
      return <Redirect to={{ pathname: `/app/profile` }} />
    }

    console.log(this.state.isLoggedIn);
    console.log(isLoggedIn());

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


const CompletelyLoggedIn = wrapWithLoggedInUser(Login2)

export default CompletelyLoggedIn;

