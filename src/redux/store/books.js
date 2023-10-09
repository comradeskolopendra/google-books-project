import { createSlice } from "@reduxjs/toolkit";
import { getBooksThunk } from "../action/books";

const initialState = {
    booksRequest: false,
    booksError: false,
    books: [],

    totalBooks: null
};

export const booksSlice = createSlice({
    name: "books",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getBooksThunk.rejected, (state, action) => {
                state = {
                    books: [],
                    booksError: true,
                    booksRequest: false,
                    totalBooks: null,
                };

                return state;
            })
            .addCase(getBooksThunk.pending, (state, action) => {
                state = {
                    books: [],
                    booksError: false,
                    booksRequest: true,
                    totalBooks: null,
                };

                return state;
            })
            .addCase(getBooksThunk.fulfilled, (state, action) => {
                const { items, totalItems } = action.payload;

                state = {
                    books: items,
                    booksError: false,
                    booksRequest: false,
                    totalBooks: totalItems,
                };

                return state;
            });
    },
});

export default booksSlice.reducer;
