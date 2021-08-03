import {
  ADD_BOOK_ERROR,
  ADD_BOOK_LOADING,
  ADD_BOOK_SUCCESS,
  DELETE_BOOK_ERROR,
  DELETE_BOOK_LOADING,
  DELETE_BOOK_SUCCESS,
  EDIT_BOOK_ERROR,
  EDIT_BOOK_LOADING,
  EDIT_BOOK_SUCCESS,
  FETCH_BOOK_ERROR,
  FETCH_BOOK_LOADING,
  FETCH_BOOK_SUCCESS
} from "./types";

import axios from "axios";

const url =
  "https://github.com/ak5020/react-reduxthunk-crud-app-axios/blob/main/src/db.json";

export const fetchBooksSuccess = (data) => {
  return {
    type: "FETCH_BOOK_SUCCESS",
    payload: data
  };
};

export const fetchBooks = () => {
  return (dispatch) => {
    return axios
      .get(url)
      .then((response) => {
        console.log("fetch data", response);
        const data = response.data;
        dispatch(fetchBooksSuccess(data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

// export default bookReducer
