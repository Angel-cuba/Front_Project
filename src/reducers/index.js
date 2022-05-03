import { combineReducers } from 'redux';
import reducers from './reducers';
import carReducers from './carReducers';

export const reducer = combineReducers({
  // reducers go here
  reducers,
  carReducers,
});
