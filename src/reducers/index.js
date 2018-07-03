import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

//mapping of our reducers' key: value
const rootReducer = combineReducers({
  //key is piece or name of state, value is reducer
  //itself (list of objects/books)
  books: BooksReducer,
  ActiveBook: ActiveBook
});

export default rootReducer;
