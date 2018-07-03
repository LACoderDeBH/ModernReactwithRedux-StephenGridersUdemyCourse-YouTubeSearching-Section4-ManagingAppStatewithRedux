
//action
export function selectBook(book) {
  //console.log('A book has been selected:', book.title);

//selectBook is an ActionCreator, it needs to return an ActionCreator
//an object with a type property
  return {
    type: 'BOOK_SELECTED', 
    payload: book
  };
}
