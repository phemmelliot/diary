import http from 'axios';

// action types
import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from '../actionTypes/authentication';

const loginUser = postData => (dispatch) => {
  console.log(postData);
  const url = 'https://phemmelliotdiary.herokuapp.com/api/v1/user/login';
  return http({
    method: 'post',
    url,
    data: JSON.stringify(postData),
    headers: {
      'Content-type': 'application/json',
    },
  })
    .then(response => dispatch({
      type: LOGIN_SUCCESS,
      payload: {
        status: response.status,
        data: response.data,
      },
    }))
    .catch(({ response }) => dispatch({
      type: LOGIN_FAILURE,
      payload: {
        status: response.status,
        data: response.data,
      },
    }));
};

export default loginUser;
