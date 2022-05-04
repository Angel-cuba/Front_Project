import { ADD_TO_CART, REMOVE_FROM_CART } from '../types/types';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = { cart: [] }, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const newItems = [action.payload, ...state.cart];
      return {
        ...state,
        cart: newItems,
      };
    case REMOVE_FROM_CART:
      return { ...state, stateInCar: action.payload };
    default:
      return state;
  }
};
