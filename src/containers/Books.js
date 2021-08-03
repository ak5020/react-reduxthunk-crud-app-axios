import React from "react";
import { books } from "../data";
import Book from "../components/Book";
import { connect } from "react-redux";

class Books extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">title</th>
              <th scope="col">Author</th>
              <th scope="col">Year</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {this.props.books.map((book) => {
              return <Book key={book.id} book={book} />;
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.booksData.books || []
  };
};

export default connect(mapStateToProps, null)(Books);
