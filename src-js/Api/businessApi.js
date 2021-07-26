import { businessDataStoreActions } from '../store/businessDataStore';
import {baseUrl} from "../constants/url";

export const fetchBusinessData = () => {
  return async (dispatch) => {
    const fetchData = async (url) => {
      const response = await fetch(
        `${baseUrl}/${url}`
      );
      if (!response.ok) {
        throw new Error('Could not fetch data!');
      }
      const data = await response.json();
      return data;
    };
  
    try {
      const response = await fetchData("search");
      // return response.results;
      dispatch(
        businessDataStoreActions.setBusinesses(response.results)
    );
    } catch (error) {
      console.error(error)
    }
  };
};