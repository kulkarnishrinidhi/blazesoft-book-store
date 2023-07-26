import { configureStore, createSlice } from "@reduxjs/toolkit";
import { BOOK_LIST } from "../constants/books";
import { act } from "react-dom/test-utils";

const bookStoreSlice = createSlice({
  name: "bookStore",
  initialState: { bookList: BOOK_LIST },
  reducers: {
    addBook(state, action) {
      const { newBook } = action.payload;
      //check if new book or editing existing book
      const foundIndex = state?.bookList.findIndex(
        (elem) => elem.id === newBook.id
      );
      const isExistingBook = foundIndex > -1;
      if (isExistingBook) {
        state.bookList[foundIndex] = newBook;
      } else {
        state.bookList = [newBook, ...state.bookList];
      }
    },
    deleteBook(state, action) {
      const { book } = action.payload;
      state.bookList = state.bookList.filter((b) => b.id !== book.id);
    },
  },
});

export const bookStoreActions = bookStoreSlice.actions;

export default bookStoreSlice;
