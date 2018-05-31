import React from "react"
import { Route } from "react-router-dom"
import Details from "../components/Details"
import Home from "../components/Home"
import Login2 from "../components/Login2"
import PrivateRoute from "../components/PrivateRoute"
import Status from "../components/Status"

const App = () => (
  <div>
    <Status />
    <PrivateRoute path="/app/profile" component={Home} />
    <PrivateRoute path="/app/details" component={Details} />
    <Route path="/app/login" component={Login2} />
  </div>
)

export default App
