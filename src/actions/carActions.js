import { ADD_TO_CART, REMOVE_FROM_CART } from '../types/types';

export const addToCart = (item, items) => async (dispatch) => {
  const newItem = items.find((itemInCart) => itemInCart.index === item.id);
  console.log('new item', newItem);
  try {
    dispatch({ type: ADD_TO_CART, payload: newItem });
  } catch (error) {
    console.log(error);
  }
};

export const removeFromCart = (item, items) => async (dispatch) => {
  // const itemFromCart = items.filter((itemInCart) => itemInCart.indexOf(item) !== item.id);
  for (let i = 0; i < items.length; i++) {
    if (items[i][0].name.common === item) {
      items.splice(i, 1);
    }
  }

  try {
    dispatch({ type: REMOVE_FROM_CART, payload: items });
  } catch (error) {
    console.log(error);
  }
};
