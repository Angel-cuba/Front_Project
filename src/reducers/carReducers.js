import { ADD_TO_CART, REMOVE_FROM_CART } from '../types/types';

// eslint-disable-next-line import/no-anonymous-default-export
export default (stateInCar = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...stateInCar, cart: [...stateInCar, action.payload] };
    case REMOVE_FROM_CART:
      return { ...stateInCar, cart: action.payload };
    default:
      return stateInCar;
  }
};
