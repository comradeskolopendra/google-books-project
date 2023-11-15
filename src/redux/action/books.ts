import { request } from "../../helpers/helpers";
import { setErrorMessage } from "../store/books";
import { createAppAsyncThunk } from ".";

const getBooksThunk = createAppAsyncThunk<any, { input: string; sort: string }>(
    "google/getBooks",
    async (query, { getState, dispatch }) => {
        const { input, sort } = query;
        const paginationStep = getState().paginationStep;

        const data = await request(
            `https://www.googleapis.com/books/v1/volumes?q=intitle:${input}&orderBy=${sort}&maxResults=${paginationStep}`
        ).catch((error) => {
            dispatch(setErrorMessage({ message: error.message }));
            return Promise.reject();
        });

        return data;
    }
);

const loadMoreBooksThunk = createAppAsyncThunk<any, {input: string; sort: string}>(
    "google/loadMore",
    async (query, { dispatch, getState }) => {
        const { input, sort } = query;
        const startIndex = getState().books.length;
        const paginationStep = getState().paginationStep;

        const data = await request(
            `https://www.googleapis.com/books/v1/volumes?q=intitle:${input}&orderBy=${sort}&startIndex=${startIndex}&maxResults=${paginationStep}`
        ).catch((error) => {
            dispatch(setErrorMessage({ message: error.message }));
            return Promise.reject();
        });

        return data;
    }
);

export { getBooksThunk, loadMoreBooksThunk };
