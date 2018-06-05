import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createSession } from '../_actions';

// - Maybe.... Connect the component serving your router to your Redux store.
// - Map a prop named isLoggedIn to state.auth.user != null or similar in your Redux store.
// - Conditionally serve the '/' or '/Dashboard' route based on this prop.
// - To initially set the user in your state container, you would need to write an authentication flow as appropriate to your application.

class Login extends Component {
  renderField(field) { 
    const { meta: { touched, error } } = field; // destructuring here allows 'touched' & 'error' below to NOT be 'field.meta.touched' & 'field.meta.error'
    const className = `form-group ${touched && error ? 'has-danger' : ''}`

    return (
      <div className={className}>
        <label>{field.label}</label>

        <input
          className="form-control"
          type={field.type}
          {...field.input} // 'field.input' is an object that contains event handlers and props; Thus, by using '...', all of these props will be made available to the <input /> tag here.
        />
        <div className="text-help">
          {touched ? error : ''} {/* 'meta.error' automatically added to the 'field' object from our 'validate' function below */}
      {/* 'touched' provided by HOC 'reduxForm'; also 'pristine' & 'invalid' are provided by 'reduxForm'  */} 
        </div>
      </div> 
    )
  }

  onSubmit(values) {
    // // The second argument in 'createPost' is a callback which goes to '/actions/index.js' as 'callback' in the 'createPost' function
    // // This second argument (..history.push..) is put into a '.then()' thus it will only be called AFTER the new post has been created.
    // this.props.createSession(values, () => {
    //   this.props.history.push('/'); // The PostsNew component has access to a bunch of props (incl 'history') helping with Navigation --> provided by <Route path="/posts/new" component={PostsNew} /> to 'PostsNew'
    // });

    console.log(this.props.createSession(values));
  }

  render() {
    const { handleSubmit } = this.props; // 'this.props.handleSubmit' is a function provided by the HOC 'redux-form'

    return (
      <div className="container">
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field // the "<Field />" component doesn't know how to show JSX onto the screen, thus the 'component' prop here is needed to produce JSX 
            label = "Email"
            name="email" // name="email" prop specifies what piece of state this Field is going to produce
            type="email"
            component={this.renderField} // 'component' is a function that returns JSX; We don't call 'renderTitleField' (just reference it), but '<Field />' will call it later
          />
          <Field
            label = "Password"
            name='password'
            type="password"
            component={this.renderField}
          />
          <button type="submit" className="btn btn-success">Submit</button>
          <Link to="/" className="btn btn-danger">Cancel</Link>
        </form>
      </div>
    );

  }
}

// Dealing with Validation - called when user tries to submit form
function validate(values) { // 'values' is an object that contains all different values that the user has entered into the form
  // console.log(values) -> { email: 'abcd', password: 'abcdee' }
  const errors = {};

  // Validate the inputs from 'values'
  if (!values.email || values.email.length < 4) {
    errors.email = "Enter an email that is at least 4 characters!";
  }     // email refers to 'name="email"' in the <Field /> above

  if (!values.password) {
    errors.categories = "Enter a password!";
  }

  // If 'errors' is empty, the form is fine to submit.
  // If 'errors' has ANY properties, redux-form assumes form is invalid.
  return errors;
}

export default reduxForm({ // use 'reduxForm' HOC to wire up this component with 'reducers/index.js' --> 'form: formReducer'
  validate, // same as validate: validate ; 
  form: 'SessionsNewForm' // 'SessionsNewForm' is the UNIQUE 'name' of the form
})( // combining 'connect' w/ 'reduxForm' helper...in second set of parentheses
  connect(null, { createSession })(Login)
);





