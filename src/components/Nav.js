import React from "react";
import { Link } from "react-router-dom";

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.notifyPathname(window.location.pathname);
  }

  render() {
    return (
      <div className="nav d-flex justify-content-center">
        {this.props.pathname === "/" ? <Link to="/create">Add New</Link> : ""}
      </div>
    );
  }
}

export default Nav;
