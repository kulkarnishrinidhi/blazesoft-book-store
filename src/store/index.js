import { configureStore } from "@reduxjs/toolkit";
import bookStoreSlice from "./book-slice";

const store = configureStore({
    reducer: {
        bookStore: bookStoreSlice.reducer
    }
})

export default store