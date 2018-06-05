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





// import React from "react"
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import { createStore, applyMiddleware } from 'redux';
// import { Provider } from 'react-redux';
// import promise from 'redux-promise';
// import thunk from 'redux-thunk'
// import reducers from '../_reducers';
// import Status from "../components/Status"
// import PrivateRoute from "../components/PrivateRoute"
// import Home from "../components/Home"
// import Details from "../components/Details"

// import Login2 from '../components/Login2';

// const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

// const App = () => (
// 	<div>
//     <Status />
//     <Provider store={createStoreWithMiddleware(reducers)}>
// 		  <BrowserRouter>
// 		 {/* Switch only goes to the most specific route, thus '/app/profile' must be placed ABOVE '/' or '/app' */}
// 	      <Switch> {/* Switch deals w/ BUG of Route both going to '/' and to /posts/new (or '/posts' & '/posts/new', etc..) */}
// 			    <PrivateRoute path="/app/profile" component={Home} />
// 			    <PrivateRoute path="/app/details" component={Details} />
// 			    <Route path="/app/login" component={Login2} />
// 	      </Switch>
// 		  </BrowserRouter>
// 	  </Provider>
//   </div>
// )

// export default App

