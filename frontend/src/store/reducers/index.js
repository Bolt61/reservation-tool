import { combineReducers } from 'redux';

import helloReducer from '../../reservation/store/Hello.Reducer';
import userReducer from '../../user/store/User.Reducer';

export default combineReducers({
  helloReducer,
  userReducer
});
