// redux library
import { combineReducers } from 'redux';

// reducers
import login from './login';
import signup from './signup';
/**
 * @desc combines all the reducers
*/
export default combineReducers({
  login,
  signup
});
