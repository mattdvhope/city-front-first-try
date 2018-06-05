import { combineReducers } from 'redux';
import LoginReducer from './reducer_login';

const rootReducer = combineReducers({
  weather: LoginReducer
});

export default rootReducer;