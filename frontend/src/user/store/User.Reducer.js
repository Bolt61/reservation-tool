import { createReducer } from '../../store/utils/storeUtils';

import { GET_PRINCIPAL_SUCCESS, GET_USER_LIST_SUCCESS } from './User.Action';

const initialState = {
  principal: {
    userName: null
  },
  userList: []
};

function getPrincipal(state, { payload }) {
  return {
    ...state,
    principal: payload
  }
}

function getUserList(state, { payload }) {
  return {
    ...state,
    userList: payload.users
  }
}

export default createReducer({
  [GET_PRINCIPAL_SUCCESS]: getPrincipal,
  [GET_USER_LIST_SUCCESS]: getUserList
}, initialState);
