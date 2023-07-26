import { useState } from 'react';
import './App.css';
import { BOOK_LIST } from './books';
import Book from './Book';
import BookForm from './BookForm';
import { actions } from './store';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const [bookList, setBookList] = useState(() => BOOK_LIST)
  const [showBookForm, setShowBookForm] = useState({ for: '', open: false })
  const [selectedBook, setSelectedBook] = useState({})
  const dispatch = useDispatch()

  const counter = useSelector((state) => state.counter)

  const handleAddBook = (newBook) => {
    setBookList([newBook, ...bookList])
    setShowBookForm({ for: '', open: false })
  }

  const handleDeleteBook = (book) => {
    const newBookList = bookList.filter((b) => b.id !== book.id)
    setBookList(newBookList)
  }

  const handleEditBook = (book) => {
    setSelectedBook(book)
  }

  return (
    <div>
      <nav>
        Book Store <h1>Counter: {counter}</h1>
        <button
          onClick={
            () => {
              dispatch(actions.increment())
            }
          }>Increment</button>
        <button
          onClick={() => {
            if (!showBookForm.open) {
              setShowBookForm({ for: 'add', open: true })
            } 
          }}
        >Add Book</button>
      </nav>
      
      <ul>
        {
          bookList.map((book) => (
            <Book
              key={book.id}
              book={book}
              handleEditBook={handleEditBook}
              handleDeleteBook={handleDeleteBook}
            />
          ))
        }
      </ul>
      {showBookForm.open && (
        <BookForm
          handleAddBook={handleAddBook}
          handleClose={() => { setShowBookForm(false) }}
          bookDetails={selectedBook}
        />)
      }
    </div>
  );
}

export default App;
