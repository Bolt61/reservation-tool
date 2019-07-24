import { combineReducers } from 'redux';

import helloReducer from '../../reservation/store/Hello.Reducer';
import userReducer from '../../user/store/User.Reducer';
import reservationReducer from '../../reservation/store/Reservation.Reducer';

export default combineReducers({
  helloReducer,
  reservationReducer,
  userReducer
});
