import React from "react";
import "./styles.css";
import Books from "./containers/Books";
import Nav from "./components/Nav";
import CreateBook from "./containers/CreateBook";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pathname: "" };
  }

  notifyPathname = (pathname) => {
    this.setState({ pathname: pathname });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Nav
            notifyPathname={this.notifyPathname}
            pathname={this.state.pathname}
          />
          <Switch>
            <Route exact path="/" component={Books} />
            <Route path="/create" component={CreateBook} />
            <Route path="/edit/:id" component={CreateBook} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
