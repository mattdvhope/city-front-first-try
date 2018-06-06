import React from "react"
import PropTypes from "prop-types"
import { Redirect, Route } from "react-router-dom"
// import { isLoggedIn } from "../utils/auth"

// More info at https://reacttraining.com/react-router/web/example/auth-workflow

///TEMPORARY FUNCTION!!!!!!!
function isLoggedIn() {
  return true;
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      !isLoggedIn() ? (
        // If we’re not logged in, redirect to the home page.
        <Redirect to={{ pathname: `/app/login` }} />
      ) : (
        <Component {...props} />
      )
    }
  />
)

PrivateRoute.propTypes = {
  component: PropTypes.any.isRequired,
}

export default PrivateRoute
