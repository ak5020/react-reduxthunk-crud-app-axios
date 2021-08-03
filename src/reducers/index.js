import { combineReducers } from "redux";
import books from "./BookReducers";

export default combineReducers({
  booksData: books
});
