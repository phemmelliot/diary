// redux library
import { combineReducers } from 'redux';

// reducers
import login from './login';
/**
 * @desc combines all the reducers
*/
export default combineReducers({
  login
});
