import { ALL_DATA, DATA_BY_ID } from '../types/types';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = [], action) => {
  switch (action.type) {
    case ALL_DATA:
      return { ...state, data: action.payload };
    case DATA_BY_ID:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};
