import { CREATE_SESSION } from '../_actions';

export default function(state = [], action) {
  console.log('Action received: ', action);

	switch (action.type) {
	case CREATE_SESSION: 
		action.payload.then((response) => console.log(response));

		// return [ action.payload.data, ...state ] // the spread operator will not return the old state (mutating it -- BAD!!), but will just return it's data which will now be combined here with action.payload.data
	}

	return state;
}