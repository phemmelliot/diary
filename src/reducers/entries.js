// initial state
import initialState from '../store/initialState';
// action types
import {
  FETCH_ALL_SUCCESS,
  FETCH_ALL_FAILURE,
  UPDATE_ENTRY_SUCCESS,
  UPDATE_ENTRY_FAILURE,
  DELETE_ENTRY_SUCCESS,
  DELETE_ENTRY_FAILURE,
  CREATE_ENTRY_SUCCESS,
  CREATE_ENTRY_FAILURE,
} from '../actionTypes/entries';

/**
 * @returns {object} param
 * @param {object} state
 * @param {object} action
 * @desc a reducer for search
 */
const reducer = (state = initialState.auth, action) => {
  switch (action.type) {
    case FETCH_ALL_SUCCESS:
      return {
        ...state,
        allEntriesResponse: action.payload
      };
    case FETCH_ALL_FAILURE:
      return {
        ...state,
        allEntriesResponse: action.payload
      };
    case UPDATE_ENTRY_SUCCESS:
      return {
        ...state,
        updateEntryResponse: action.payload
      };
    case UPDATE_ENTRY_FAILURE:
      return {
        ...state,
        updateEntryResponse: action.payload
      };
    case CREATE_ENTRY_SUCCESS:
      return {
        ...state,
        createEntryResponse: action.payload
      };
    case CREATE_ENTRY_FAILURE:
      return {
        ...state,
        createEntryResponse: action.payload
      };
    case DELETE_ENTRY_SUCCESS:
      return {
        ...state,
        deleteEntryResponse: action.payload
      };
    case DELETE_ENTRY_FAILURE:
      return {
        ...state,
        deleteEntryResponse: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
