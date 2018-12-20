import { RSAA } from 'redux-api-middleware';

export const GET_HELLO_SUCCESS = 'GET_HELLO_SUCCESS';

export const getHello = () => {
  return {
    [RSAA]: {
      endpoint: '/api/hello',
      method: 'GET',
      types: ['REQUEST', GET_HELLO_SUCCESS, 'FAILURE']
    }
  }
};
