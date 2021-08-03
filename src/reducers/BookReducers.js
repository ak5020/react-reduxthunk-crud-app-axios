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
} from "../actions/types";

const defaultState = {
  books: [],
  error: null,
  isLoading: false
};

const BookReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "FETCH_BOOK_SUCCESS":
      return { ...state, books: action.payload };
    case "FETCH_BOOK_LOADING":
      return { ...state, isLoading: action.payload };
    case "FETCH_BOOK_ERROR":
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default BookReducer;
