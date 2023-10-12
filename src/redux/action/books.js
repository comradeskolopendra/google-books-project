import { createAsyncThunk } from "@reduxjs/toolkit";
import { request } from "../../helpers/helpers"
import { setErrorMessage } from "../store/books";

const getBooksThunk = createAsyncThunk("google/getBooks", async (query, { getState, dispatch }) => {
    const { input, sort } = query;
    const paginationStep = getState().paginationStep;

    const data = await request(`https://www.googleapis.com/books/v1/volumes?q=intitle:${input}&orderBy=${sort}&maxResults=${paginationStep}`)
        .catch((error) => {
            dispatch(setErrorMessage({ message: error.message }));
            return Promise.reject();
        });

    return data;
});

const loadMoreBooksThunk = createAsyncThunk("google/loadMore", async (query, { getState }) => {
    const { input, sort } = query;
    const startIndex = getState().books.length;
    const paginationStep = getState().paginationStep;

    const data = await request(`https://www.googleapis.com/books/v1/volumes?q=intitle:${input}&orderBy=${sort}&startIndex=${startIndex}&maxResults=${paginationStep}`)
        .catch((error) => {
            dispatch(setErrorMessage({ message: error.message }));
            return Promise.reject();
        });

    return data;
})

export { getBooksThunk, loadMoreBooksThunk };
