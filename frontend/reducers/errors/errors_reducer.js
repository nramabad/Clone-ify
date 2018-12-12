import { combineReducers } from 'redux';

import sessionErrorsReducer from './users/session_errors_reducer';

const sessionErrorsReducer = combineReducers({

  session: sessionErrorsReducer
});

export default errorsReducer;
