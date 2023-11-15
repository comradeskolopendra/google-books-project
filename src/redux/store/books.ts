import { createSlice } from "@reduxjs/toolkit";
import { getBooksThunk, loadMoreBooksThunk } from "../action/books";

interface IInitialState {
    booksRequest: boolean;
    booksError: boolean;
    books: any[];
    errorMessage: string;
    loadMoreBooksRequest: boolean;
    totalBooks: null | number;
    filterOptions: string[];
    sortOptions: string[];
    paginationStep: number;
    searchQuery: {
        input: string;
        filter: string;
        sort: string;
    }
}

const initialState: IInitialState = {
    booksRequest: false,
    booksError: false,
    books: [],

    errorMessage: "",

    loadMoreBooksRequest: false,

    totalBooks: null,

    filterOptions: [
        "all",
        "art",
        "biography",
        "computers",
        "history",
        "medical",
        "fiction",
    ],

    sortOptions: ["relevance", "newest"],

    paginationStep: 30,

    searchQuery: {
        input: "",
        filter: "all",
        sort: "relevance",
    },
};

export const booksSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        setSearchQuery(state, action) {
            const { name, value } = action.payload;
            state = {
                ...state,
                searchQuery: {
                    ...state.searchQuery,
                    [name]: value
                }
            }

            return state;
        },

        setErrorMessage(state, action) {
            const { message } = action.payload;

            state = {
                ...state,
                errorMessage: message
            }

            return state;
        },

        clearErrorMessage(state) {
            state = {
                ...state,
                errorMessage: ""
            };

            return state;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getBooksThunk.rejected, (state) => {

                state = {
                    ...state,
                    books: [],
                    booksError: true,
                    booksRequest: false,
                    totalBooks: null,
                };

                return state;
            })
            .addCase(getBooksThunk.pending, (state) => {
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

            .addCase(loadMoreBooksThunk.rejected, (state) => {
                state = {
                    ...state,
                    booksRequest: false,
                    booksError: true,
                    loadMoreBooksRequest: false,
                };

                return state;
            })
            .addCase(loadMoreBooksThunk.pending, (state) => {
                state = {
                    ...state,
                    booksRequest: false,
                    booksError: false,
                    loadMoreBooksRequest: true,
                };

                return state;
            })
            .addCase(loadMoreBooksThunk.fulfilled, (state, action) => {
                const { items, totalItems } = action.payload;

                state = {
                    ...state,
                    books: [...state.books].concat(items),
                    loadMoreBooksRequest: false,
                    booksError: false,
                    booksRequest: false,
                    totalBooks: totalItems
                };

                return state;
            })
    },
});

type TBooksActionCreators = typeof booksSlice.actions;
export type TBookActions = ReturnType<TBooksActionCreators[keyof TBooksActionCreators]>

export const { setSearchQuery, setErrorMessage, clearErrorMessage } = booksSlice.actions

export default booksSlice.reducer;
