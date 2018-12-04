// initial state
import initialState from '../store/initialState';

// action types
import {
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE
} from '../actionTypes/authentication';

/**
 * @returns {object} param
 * @param {object} state
 * @param {object} action
 * @desc a reducer for search
 */
const reducer = (state = initialState.auth, action) => {
  switch (action.type) {
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isAuth: true,
        userResponse: action.payload
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        isAuth: false,
        userResponse: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
