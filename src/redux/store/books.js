import { createSlice, current } from "@reduxjs/toolkit";
import { getBooksThunk, loadMoreBooksThunk } from "../action/books";

const initialState = {
    booksRequest: false,
    booksError: false,
    books: [],

    loadMoreBooksRequest: false,

    totalBooks: null,

    filterOptions: [
        "all",
        "art",
        "biography",
        "computers",
        "history",
        "medical",
        "poetry",
    ],

    sortOptions: [
        "relevance",
        "newest"
    ],

    paginationStep: 30
};

export const booksSlice = createSlice({
    name: "books",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getBooksThunk.rejected, (state, action) => {
                state = {
                    ...state,
                    books: [],
                    booksError: true,
                    booksRequest: false,
                    totalBooks: null,
                };

                return state;
            })
            .addCase(getBooksThunk.pending, (state, action) => {
                state = {
                    ...state,
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
                    ...state,
                    books: items,
                    booksError: false,
                    booksRequest: false,
                    totalBooks: totalItems,
                };

                return state;
            })

            .addCase(loadMoreBooksThunk.rejected, (state, action) => {
                state = {
                    ...state,
                    booksRequest: false,
                    booksError: true,
                    loadMoreBooksRequest: false,
                };

                return state;
            })
            .addCase(loadMoreBooksThunk.pending, (state, action) => {
                state = {
                    ...state,
                    booksRequest: false,
                    booksError: false,
                    loadMoreBooksRequest: true,
                };

                return state;
            })
            .addCase(loadMoreBooksThunk.fulfilled, (state, action) => {
                const { items } = action.payload;

                state = {
                    ...state,
                    books: [...state.books].concat(items),
                    loadMoreBooksRequest: false,
                    booksError: false,
                    booksRequest: false,
                };

                return state;
            })
    },
});

export default booksSlice.reducer;
