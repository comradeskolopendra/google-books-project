import { createAsyncThunk } from "@reduxjs/toolkit";
import { request } from "../../helpers/helpers";

const getBooksThunk = createAsyncThunk("google/getBooks", async (query) => {
    const { input, filter, sort } = query;
    const data = await request(`https://www.googleapis.com/books/v1/volumes?q=${input}+intitle&orderBy=${sort}`);

    return data;
});

export { getBooksThunk };
