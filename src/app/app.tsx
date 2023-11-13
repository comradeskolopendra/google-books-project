import React, { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import {
    getStateBooksError,
    getStateBooksRequest,
    getStateErrorMessage
} from "../selectors/books-selectors";

import SearchForm from "../components/search-form/search-form";
import Loader from "../components/loader/loader";
import ErrorComponent from "../components/error/error";

import BookPage from "../pages/book-page/book-page";
import MainPage from "../pages/main-page/main-page";
import { FC } from "react";

const App: FC = () => {
    const booksRequest = useSelector(getStateBooksRequest);
    const booksError = useSelector(getStateBooksError);
    const errorMessage = useSelector(getStateErrorMessage)

    return (
        <div>
            <h1 className={"totalBooks"}>Искать книги</h1>
            <SearchForm />

            {booksRequest && <Loader />}
            {booksError && <ErrorComponent error={errorMessage} />}
            {!booksError && !booksRequest && (
                <Routes>
                    <Route
                        path="/"
                        element={<MainPage />}
                    />
                    <Route
                        path="/book/:id"
                        element={<BookPage />}
                    />
                </Routes>
            )}
        </div>
    );
}

export default App;
