import React from "react"
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import promise from 'redux-promise';
import Details from "../components/Details"
import Home from "../components/Home"
import Login2 from "../components/Login2"
import PrivateRoute from "../components/PrivateRoute"
import Status from "../components/Status"

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
			    <Route path="/app/login" component={Login2} />
	      </Switch>
		  </BrowserRouter>
	  </Provider>
  </div>
)

export default App

