import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import {
    getStateBooksError,
    getStateBooksRequest,

} from "../selectors/books-selectors";

import SearchForm from "../components/search-form/search-form";
import Loader from "../components/loader/loader";

import BookPage from "../pages/book-page/book-page";
import MainPage from "../pages/main-page/main-page";

function App() {
    const booksRequest = useSelector(getStateBooksRequest);
    const booksError = useSelector(getStateBooksError);

    return (
        <>
            <h1 style={{ textAlign: "center" }}>Search for books</h1>
            {booksRequest && <Loader isLoading={booksRequest} />}
            <SearchForm />

            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/book/:id" element={<BookPage />} />
            </Routes>
        </>
    );
}

export default App;
