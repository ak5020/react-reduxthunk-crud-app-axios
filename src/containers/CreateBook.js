import React from "react";
import { createBook } from "../actions/BookActions";
import { connect } from "react-redux";

class CreateBook extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      title: "",
      body: ""
    };
  }

  inputChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onAdd(this.state);
    // this.state passing to onAdd() / this.state has all attributes of book
  };

  render() {
    return (
      <div className="create-book my-5">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              name="title"
              type="text"
              className="form-control"
              placeholder="title here"
              onChange={this.inputChangeHandler}
            />
          </div>
          <div className="form-group">
            <input
              name="body"
              type="text"
              className="form-control"
              placeholder="body here"
              onChange={this.inputChangeHandler}
            />
          </div>
          <div className="mt-5">
            <button type="submit" className="btn btn-primary">
              Add
            </button>
            <button type="button" className="btn btn-danger mx-2">
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAdd: (book) => {
      dispatch(createBook(book));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateBook);
