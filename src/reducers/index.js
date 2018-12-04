// redux library
import { combineReducers } from 'redux';

// reducers
import login from './login';
import signup from './signup';
import entries from './entries';
/**
 * @desc combines all the reducers
*/
export default combineReducers({
  login,
  signup,
  entries
});
