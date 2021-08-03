import React from "react";

class CreateBook extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="create-book my-5">
        <form>
          <input
            name="title"
            type="text"
            className="form-control"
            placeholder="title here"
          />
          <input
            name="author"
            type="text"
            className="form-control"
            placeholder="author here"
          />
          <input
            name="year"
            type="text"
            className="form-control"
            placeholder="year here"
          />
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

export default CreateBook;
