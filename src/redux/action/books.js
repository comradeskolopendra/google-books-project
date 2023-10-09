import { createAsyncThunk } from "@reduxjs/toolkit";
import { request } from "../../helpers/helpers";

const getBooksThunk = createAsyncThunk("google/getBooks", async (query) => {
    const { input, sort } = query;
    const data = await request(`https://www.googleapis.com/books/v1/volumes?q=intitle:${input}&orderBy=${sort}&maxResults=${30}`);
    return data;
});

export { getBooksThunk };
