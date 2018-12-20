import { createReducer } from '../../store/utils/storeUtils';

import { GET_HELLO_SUCCESS } from './Hello.Action';

const initialState = {
  message: undefined
};

function getHello(state, { payload }) {
  return {
    ...state,
    message: payload.message
  }
}

export default createReducer({
  [GET_HELLO_SUCCESS]: getHello
}, initialState);