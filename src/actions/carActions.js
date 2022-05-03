import { ADD_TO_CART, REMOVE_FROM_CART } from '../types/types';

export const addToCart = (item, items) => async (dispatch) => {
  const addingToCart = items.filter((itemInCart) => itemInCart.index === item.id);

  try {
    dispatch({ type: ADD_TO_CART, payload: addingToCart });
  } catch (error) {
    console.log(error);
  }
};

export const removeFromCart = (item, items) => async (dispatch) => {
  const itemFromCart = items.filter((itemInCart) => itemInCart.id !== item.id);
  try {
    dispatch({ type: REMOVE_FROM_CART, payload: itemFromCart });
  } catch (error) {
    console.log(error);
  }
};
