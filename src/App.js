import { useState } from 'react';
import './App.css';
import { BOOK_LIST } from './books';
import Book from './Book';
import BookForm from './BookForm';

function App() {
  const [bookList, setBookList] = useState(() => BOOK_LIST)
  const [showBookForm, setShowBookForm] = useState(false)

  const handleDelete = (book) => {
    const newBookList = bookList.filter((b) => b.id !== book.id)
    setBookList(newBookList)
  }

  const handleAddBook = (newBook) => {
    setBookList([newBook, ...bookList])
    setShowBookForm(false)
  }

  return (
    <div>
      <nav>Book Store</nav>
      <button onClick={() => { if (!showBookForm) setShowBookForm(true) }} >Add Book</button>
      <ul>
        {
          bookList.map((book) => <Book key={book.id} book={book} handleDelete={handleDelete} />)
        }
      </ul>
      {showBookForm && (
        <BookForm
          handleAddBook={handleAddBook}
          handleClose={() => { setShowBookForm(false) }}
        />)
      }
    </div>
  );
}

export default App;
