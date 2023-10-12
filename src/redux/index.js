import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import booksSlice from './store/books';

export const store = configureStore({
    devTools: false,
    reducer: booksSlice,
    middleware: [thunk],
});