import http from 'axios';

// action types
import {
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE
} from '../actionTypes/authentication';

const signupUser = postData => (dispatch) => {
  console.log(postData);
  const url = 'https://phemmelliotdiary.herokuapp.com/api/v1/user/signup';
  return http({
    method: 'post',
    url,
    data: JSON.stringify(postData),
    headers: {
      'Content-type': 'application/json',
    },
  })
    .then(response => dispatch({
      type: SIGNUP_SUCCESS,
      payload: {
        status: response.status,
        data: response.data,
      },
    }))
    .catch(({ response }) => dispatch({
      type: SIGNUP_FAILURE,
      payload: {
        status: response.status,
        data: response.data,
      },
    }));
};

export default signupUser;
