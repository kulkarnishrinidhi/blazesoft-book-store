import { configureStore, createSlice } from "@reduxjs/toolkit";
import { BOOK_LIST } from "../constants/books";
import { act } from "react-dom/test-utils";

const bookStoreSlice = createSlice({
    name: 'counter',
    initialState: { bookList: BOOK_LIST },
    reducers: {
        addBook(state, action) {
            const { newBook } = action.payload;
            state.bookList = [newBook, ...state.bookList]
        },
        deleteBook(state, action) {
            const { book } = action.payload
            state.bookList = state.bookList.filter((b) => b.id !== book.id)
        },
    }
})

export const bookStoreActions = bookStoreSlice.actions;

export default bookStoreSlice