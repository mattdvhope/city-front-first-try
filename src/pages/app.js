import React from "react"
import { Route } from "react-router-dom"
import Details from "../components/Details"
import Home from "../components/Home"
import LoginTest from "../components/LoginTest"
import PrivateRoute from "../components/PrivateRoute"
import Status from "../components/Status"

const App = () => (
  <div>
    <Status />
    <PrivateRoute path="/app/profile" component={Home} />
    <PrivateRoute path="/app/details" component={Details} />
    <Route path="/app/login" component={LoginTest} />
  </div>
)

export default App
