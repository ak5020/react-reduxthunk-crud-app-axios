import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { fetchBooks } from "./actions/BookActions";

const store = createStore(rootReducer, applyMiddleware(thunk));

store.dispatch(fetchBooks());

export const history = createBrowserHistory({ forceRefresh: true });
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
