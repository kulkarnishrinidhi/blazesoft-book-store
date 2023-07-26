import { useState } from 'react';
import { BOOK_LIST } from './constants/books';
import Book from './components/BookStore/Book';
import BookForm from './components/BookStore/BookForm';
import { HStack } from './components/common/Flex';
import Modal from './components/common/Modal/Modal';

function App() {
  const [bookList, setBookList] = useState(() => BOOK_LIST)
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleDelete = (book) => {
    const newBookList = bookList.filter((b) => b.id !== book.id)
    setBookList(newBookList)
  }

  const handleAddBook = (newBook) => {
    setBookList([newBook, ...bookList])
    handleOpenModal()
  }

  return (
    <div className='container'>
      <HStack vCentered styleProps={{ justifyContent: 'space-between' }}>
        <h1 className='mt-0'>Book Store</h1>
        <div>
          <button className='btn btn-info' onClick={handleOpenModal}>Add Book</button>
        </div>
      </HStack>
      <hr className='my-6' />
      {
        bookList.map((book) => <div className='mt-4' key={book.id}>
          <Book book={book} handleDelete={handleDelete} />
        </div>)
      }

      <Modal title='Add Book' isOpen={showModal} onClose={handleCloseModal}>
        <BookForm
          handleAddBook={handleAddBook}
          handleClose={handleCloseModal}
        />
      </Modal>
    </div>
  );
}

export default App;