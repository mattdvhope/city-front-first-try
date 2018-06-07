import React from "react"
import PropTypes from "prop-types"
import { Redirect, Route } from "react-router-dom"
import { isLoggedIn } from "../utils/auth"

// More info at https://reacttraining.com/react-router/web/example/auth-workflow

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      !isLoggedIn() ? (
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

