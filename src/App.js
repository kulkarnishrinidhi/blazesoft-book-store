import { useState } from "react";
import Book from "./components/BookStore/Book";
import BookForm from "./components/BookStore/BookForm";
import { HStack } from "./components/common/Flex";
import Modal from "./components/common/Modal/Modal";
import useBookStore from "./components/BookStore/useBookStore";
import { REASONS } from "./constants/books";

function App() {
  const [showModal, setShowModal] = useState({ reason: "", open: false });
  const { bookList, handleAddBook, handleDeleteBook } = useBookStore();
  const [selectedBook, setSelectedBook] = useState({});

  const handleOpenModal = (reason) => {
    setShowModal({ reason, open: true });
  };

  const handleCloseModal = () => {
    setSelectedBook({});
    setShowModal({ reason: "", open: false });
  };

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
      <HStack vCentered styleProps={{ justifyContent: "space-between" }}>
        <h1 className="mt-0">Book Store</h1>
        <div>
          <button
            className="btn btn-info"
            onClick={() => {
              handleOpenModal(REASONS.ADD);
            }}
          >
            Add Book
          </button>
        </div>
      </HStack>
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
    </div>
  );
}

export default App;
