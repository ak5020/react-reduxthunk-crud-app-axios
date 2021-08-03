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

const url = "https://jsonplaceholder.typicode.com/posts";

export const fetchBooksSuccess = (data) => {
  return {
    type: "FETCH_BOOK_SUCCESS",
    payload: data
  };
};

export const fetchBooksLoading = (data) => {
  return {
    type: "FETCH_BOOK_LOADING",
    payload: data
  };
};

export const fetchBooksError = (data) => {
  console.log("error", data);
  return {
    type: "FETCH_BOOK_ERROR",
    payload: data
  };
};

export const fetchBooks = () => {
  let isLoading = true;

  return (dispatch) => {
    dispatch(fetchBooksLoading(isLoading));
    return axios
      .get(url)
      .then((response) => {
        // console.log("fetch data", response);
        const data = response.data;
        dispatch(fetchBooksSuccess(data));
        isLoading = false;
        dispatch(fetchBooksLoading(isLoading));
      })
      .catch((error) => {
        const errorPayload = {};
        errorPayload["message"] = error.message;
        errorPayload["status"] = error.response.status;
        dispatch(fetchBooksError(errorPayload));
        isLoading = false;
        dispatch(fetchBooksLoading(isLoading));
      });
  };
};

// export default bookReducer
