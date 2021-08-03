import React, { Fragment } from "react";

const Book = ({ book }) => {
  return (
    <Fragment>
      <tr>
        <td>{book.id}</td>
        <td>{book.title}</td>
        <td>{book.body}</td>
        {/* <td>{book.year}</td> */}
        <td>
          <button type="button" className="btn btn-success">
            Edit
          </button>
        </td>
        <td>
          <button type="button" className="btn btn-danger">
            Delete
          </button>
        </td>
      </tr>
    </Fragment>
  );
};

export default Book;
