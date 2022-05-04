import { ADD_TO_CART, REMOVE_FROM_CART } from '../types/types';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = { cart: [] }, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const country = action.payload;

      const isDuplicate = state.cart.some((cart) => cart.name.common === country.name.common);
      if (isDuplicate) {
        return state;
      }
      const newItems = [country, ...state.cart];
      return {
        ...state,
        cart: newItems,
      };
    case REMOVE_FROM_CART:
      const { countryName } = action.payload;
      const newCart = state.cart.filter((item) => item.name.common !== countryName);

      return { ...state, cart: newCart };
    default:
      return state;
  }
};
