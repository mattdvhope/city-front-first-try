import React from "react"
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import promise from 'redux-promise';
import Status from "../components/Status"
import PrivateRoute from "../components/PrivateRoute"
import Home from "../components/Home"
import Details from "../components/Details"
import Login from "../components/Login"

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

function reducers() {
	// to be implemented later!!!!! :-) ...in another file...
}

const App = () => (
	<div>
    <Status />
	  <Provider store={createStoreWithMiddleware(reducers)}>
		  <BrowserRouter>
		{/* Switch only goes to the most specific route, thus '/app/profile' must be placed ABOVE '/' or '/app' */}
	      <Switch> {/* Switch deals w/ BUG of Route both going to '/' and to /posts/new (or '/posts' & '/posts/new', etc..) */}
			    <PrivateRoute path="/app/profile" component={Home} />
			    <PrivateRoute path="/app/details" component={Details} />
			    <Route path="/app/login" component={Login} />
	      </Switch>
		  </BrowserRouter>
	  </Provider>
  </div>
)

export default App

