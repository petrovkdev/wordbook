import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import form1 from './form1';
import form2 from './form2';

export default combineReducers({
  routing: routerReducer,
  form1,
  form2
})
