import { useDispatch, useSelector } from "react-redux";
import { bookStoreActions } from "../../store/book-slice";

function useBookStore() {
  const dispatch = useDispatch();
  const bookList = useSelector((store) => store.bookStore.bookList);

  const handleDeleteBook = (book) => {
    dispatch(bookStoreActions.deleteBook({ book }));
  };

  const handleAddBook = (newBook) => {
    dispatch(bookStoreActions.addBook({ newBook }));
  };

  return {
    bookList,
    handleDeleteBook,
    handleAddBook,
  };
}

export default useBookStore;
