import { businessDataStoreActions } from '../store/businessDataStore';
import {baseUrl} from "../constants/url";
import axios from "axios";

let cancelToken

export const fetchBusinessData = ({searchText}) => {
  return async (dispatch) => {

    //Check if there are any previous pending requests
    if (typeof cancelToken != typeof undefined) {
      cancelToken.cancel(`Search request with term ${searchText} cancelled due to new request.`)
    }
    //Save the cancel token for the current request
    cancelToken = axios.CancelToken.source()

    const fetchData = async (url) => {
      const response = await axios({
        method: 'get',
        url:`${baseUrl}/${url}?query=${searchText}`,
        cancelToken: cancelToken.token,
      });

      const data = await response;
      return data.data;
    };
  
    try {
      const response = await fetchData("search");
        dispatch(
          businessDataStoreActions.setBusinesses(response.results)
      );
    } catch (error) {
      console.error(error)
    }
  };
};