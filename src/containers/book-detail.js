import React, {Component } from 'react';
import { connect } from 'react-redux';


class BookDetail extends Component {
  render() {
    if (!this.props.book) {
      return <div>Select a book to get started.</div>
    }
    return(
      <div>
        <h3>Details for: </h3>
        <div>Title: {this.props.book.title}</div>
        <div>{this.props.book.pages}</div>
      </div>
    );
  }
}


//helper function. param is application mapStateToProps
//what is returned will be stored as props inside of BookDetail
function mapStateToProps(state) {
  return {
    book: state.ActiveBook
  };
}

export default connect(mapStateToProps)(BookDetail);
