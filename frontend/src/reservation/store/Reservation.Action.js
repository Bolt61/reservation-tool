import { RSAA } from 'redux-api-middleware';

export const GET_RESERVATIONS_SUCCESS = 'GET_RESERVATIONS_SUCCESS';

export const getReservations = () => {
  return {
    [RSAA]: {
      endpoint: '/api/reservations',
      method: 'GET',
      types: ['REQUEST', GET_RESERVATIONS_SUCCESS, 'FAILURE']
    }
  }
};
