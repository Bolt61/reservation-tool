import { RSAA } from 'redux-api-middleware';

export const GET_PRINCIPAL_SUCCESS = 'GET_PRINCIPAL_SUCCESS';
export const GET_USER_LIST_SUCCESS = 'GET_USER_LIST_SUCCESS';

export const getPrincipal = () => {
  return {
    [RSAA]: {
      endpoint: '/principal',
      method: 'GET',
      types: ['REQUEST', GET_PRINCIPAL_SUCCESS, 'FAILURE']
    }
  }
};

export const getUserList = () => {
  return {
    [RSAA]: {
      endpoint: '/api/users',
      method: 'GET',
      types: ['REQUEST', GET_USER_LIST_SUCCESS, 'FAILURE']
    }
  }
};
