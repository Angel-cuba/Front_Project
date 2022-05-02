import { fetchData, fetchDataById } from '../api/api';
import { ALL_DATA } from '../types/types';

export const fetchingData = () => async (dispatch) => {
  try {
    const { data } = await fetchData();
    dispatch({ type: ALL_DATA, payload: data });
    // const data = await response.json();
  } catch (error) {
    console.log(error);
  }
};

export const fetchingDataById = (id) => async (dispatch) => {
  try {
    const { data } = await fetchDataById(id).then((res) => res.json());
    const dataById = data.find((item) => item.id === id);
    dispatch({ type: ALL_DATA, payload: dataById });
    // const data = await response.json();
  } catch (error) {
    console.log(error);
  }
};
