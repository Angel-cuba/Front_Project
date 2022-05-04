import { ADD_TO_CART, REMOVE_FROM_CART } from '../types/types';

export const addToCart = (country) => async (dispatch) => {
  try {
    dispatch({ type: ADD_TO_CART, payload: country });
  } catch (error) {
    console.log(error);
  }
};

export const removeFromCart = (countryName) => async (dispatch) => {
  try {
    dispatch({ type: REMOVE_FROM_CART, payload: { countryName } });
  } catch (error) {
    console.log(error);
  }
};
