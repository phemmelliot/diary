import http from 'axios';

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

const token = localStorage.getItem('token');

export const getAllEntries = () => (dispatch) => {
  const url = 'https://phemmelliotdiary.herokuapp.com/api/v1/entries';
  return http({
    method: 'get',
    url,
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then(response => dispatch({
      type: FETCH_ALL_SUCCESS,
      payload: {
        status: response.status,
        data: response.data,
      },
    }))
    .catch(({ response }) => dispatch({
      type: FETCH_ALL_FAILURE,
      payload: {
        status: response.status,
        data: response.data,
      },
    }));
};

export const updateEntry = postData => (dispatch) => {
  const { title, text, id } = postData;
  const url = `https://stark-headland-67551.herokuapp.com/https://phemmelliotdiary.herokuapp.com/api/v1/entries/${id}`;
  return http({
    method: 'put',
    url,
    data: JSON.stringify({ title, text }),
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then(response => dispatch({
      type: UPDATE_ENTRY_SUCCESS,
      payload: {
        status: response.status,
        data: response.data,
      },
    }))
    .catch(({ response }) => dispatch({
      type: UPDATE_ENTRY_FAILURE,
      payload: {
        status: response.status,
        data: response.data,
      },
    }));
};

export const createEntry = postData => (dispatch) => {
  const url = 'https://stark-headland-67551.herokuapp.com/https://phemmelliotdiary.herokuapp.com/api/v1/entries';
  return http({
    method: 'post',
    url,
    data: JSON.stringify(postData),
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then(response => dispatch({
      type: CREATE_ENTRY_SUCCESS,
      payload: {
        status: response.status,
        data: response.data,
      },
    }))
    .catch(({ response }) => dispatch({
      type: CREATE_ENTRY_FAILURE,
      payload: {
        status: response.status,
        data: response.data,
      },
    }));
};

export const deleteEntry = postData => (dispatch) => {
  const { id } = postData;
  const url = `https://stark-headland-67551.herokuapp.com/https://phemmelliotdiary.herokuapp.com/api/v1/entries/${id}`;
  return http({
    method: 'post',
    url,
    data: JSON.stringify(postData),
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then(response => dispatch({
      type: DELETE_ENTRY_SUCCESS,
      payload: {
        status: response.status,
        data: response.data,
      },
    }))
    .catch(({ response }) => dispatch({
      type: DELETE_ENTRY_FAILURE,
      payload: {
        status: response.status,
        data: response.data,
      },
    }));
};
