import { fetchData, fetchDataById } from '../api/api';
import { ALL_DATA, DATA_BY_ID } from '../types/types';

export const fetchingData = () => async (dispatch) => {
  try {
    const data = await fetchData();
    dispatch({ type: ALL_DATA, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const fetchingDataById = (id) => async (dispatch) => {
  try {
    const data = await fetchDataById(id);
    dispatch({ type: DATA_BY_ID, payload: data });
  } catch (error) {
    console.log(error);
  }
};
