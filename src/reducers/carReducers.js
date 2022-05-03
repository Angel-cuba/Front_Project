import { ADD_TO_CART, REMOVE_FROM_CART } from '../types/types';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = { stateInCar: [] }, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, cart: state.stateInCar.push(action.payload) };
    case REMOVE_FROM_CART:
      return { ...state, cart: action.payload };
    default:
      return state;
  }
};
