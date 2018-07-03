import React, { Component} from 'react';
//connect property which is a function
//from react-redux library: glue btwn react and redux
import { connect } from 'react-redux';
import {selectBook} from '../actions/index';
//take action and flows trhough all reducers in application
import { bindActionCreators } from 'redux';

class BookList extends Component {
//function: maps over list of books, for ea book create
//li that contains book title
//mapStateToProps puts state avail into this.props.books
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
        key={book.title}
        onClick={() => this.props.selectBook(book)}
        className="list-group-item">
        {book.title}
        </li>
      );
    });
  }

  render() {
    return (

      <ul className="list-group col-sm-4">
        {/*call function*/}
        {this.renderList()}
      </ul>
    )
  }
}

//param is state and returns object. Whatever is
//returned is available to our component as
//this.props.books
//this is the glue between react and redux
function mapStateToProps(state) {
  //whatever is returned will show up as mapStateToProps
  //inisde of BookList
  return {
    //connection btwn redux and component
    //return array of books
    books: state.books
  };
}

//Anything returned from this unction will end up as
//props on the BookList container
function mapDispatchToProps(dispatch) {
    //whenever selectBook is called, the result  should be passed
    //to all of our reducers (what bindActionCreators does)
    //you're going to call selectBook (this is an action creator that you will call ast some point)
    //when it's called, I want to make sure that the result of it
    //flows through this dispatch function right here and this
    //dispatch function is what takes all teh action and it basicallu receives
    //them kind of like a funnel and spits them back up to all teh reducers in our application
    //bindActionCreators with dispatch says im going to take this stuff and take call
    //these actions and make sure taht they get passed on to all the different reduces inside the application
    return bindActionCreators({ selectBook: selectBook }, dispatch)
}

//export the container
//connect takes function and a component and produces
//a container.
//Promote BookList from a component o a container -
//it needs to know about this new dispatch method, selectBook
//Make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
