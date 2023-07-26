import { useCallback, useState, Suspense, lazy } from "react";
import Book from "./components/BookStore/Book";
import BookForm from "./components/BookStore/BookForm";
import Modal from "./components/common/Modal/Modal";
import useBookStore from "./components/BookStore/useBookStore";
import { REASONS } from "./constants/books";

//Lazy loading
const Header = lazy(() => import("./components/Header/Header"));

function App() {
  //state to show/hide modal. Using reason property to handle edit/add book
  const [showModal, setShowModal] = useState({ reason: "", open: false });
  //state to store selected book to edit
  const [selectedBook, setSelectedBook] = useState({});
  const { bookList, handleAddBook, handleDeleteBook } = useBookStore();

  const handleOpenModal = useCallback((reason) => {
    setShowModal({ reason, open: true });
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedBook({});
    setShowModal({ reason: "", open: false });
  }, []);

  const handleBookSubmit = (newBook) => {
    handleCloseModal();
    handleAddBook(newBook);
  };

  const handleEditBook = (book) => {
    setSelectedBook(book);
    handleOpenModal(REASONS.EDIT);
  };

  return (
    <div className="container">
      <Suspense fallback={<div>Loading...</div>}>
        <Header handleOpenModal={handleOpenModal} />
      </Suspense>
      <hr className="my-6" />
      {bookList.map((book) => (
        <div className="mt-4" key={book.id}>
          <Book
            book={book}
            handleEditBook={handleEditBook}
            handleDelete={handleDeleteBook}
          />
        </div>
      ))}
      {showModal.open && (
        <Modal
          title="Add Book"
          isOpen={showModal.open}
          onClose={handleCloseModal}
        >
          <BookForm
            handleAddBook={handleBookSubmit}
            handleClose={handleCloseModal}
            reason={showModal.reason}
            book={selectedBook}
          />
        </Modal>
      )}
    </div>
  );
}

export default App;
