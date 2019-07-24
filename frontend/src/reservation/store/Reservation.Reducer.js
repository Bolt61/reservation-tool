import { createReducer } from '../../store/utils/storeUtils';

import { GET_RESERVATIONS_SUCCESS } from './Reservation.Action';

const initialState = {
  reservations: undefined
};

function getReservations(state, { payload }) {
  return {
    ...state,
    reservations: payload.reservations
  }
}

export default createReducer({
  [GET_RESERVATIONS_SUCCESS]: getReservations
}, initialState);