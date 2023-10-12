import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import booksSlice from './store/books';

export const store = configureStore({
    devTools: true,
    reducer: booksSlice,
    middleware: [thunk],
});