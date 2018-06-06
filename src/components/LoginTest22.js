import React, { Component } from "react"

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      firstname: '',
      lastname: ''
    };
  }

  onChange = (e) => {
    var state = this.state;
    state[e.target.name] = e.target.value;

    this.setState(state);
  }


  render() {

	  return (
	    <form>
			  Email:<br />
			   <input type="text" name="email"
              placeholder="Email address" onChange={this.onChange} autoFocus />
			  <br />
			  Password:<br />
			   <input type="password" name="password"
              placeholder="Password" onChange={this.onChange} />
			  <br />
			  <input type="submit" value="Submit" />
			</form>
	  )


  }

}
