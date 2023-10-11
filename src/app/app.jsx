import { useState } from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import {
    getStateBooksError,
    getStateBooksRequest,
    getStateBooks,
} from "../selectors/books-selectors";

import SearchForm from "../components/search-form/search-form";
import Loader from "../components/loader/loader";
import ErrorComponent from "../components/error/error";

import BookPage from "../pages/book-page/book-page";
import MainPage from "../pages/main-page/main-page";
import withNavigate from "../hocs/withNavigate";

function App() {
    const booksRequest = useSelector(getStateBooksRequest);
    const booksError = useSelector(getStateBooksError);
    const books = useSelector(getStateBooks);
    const [searchQuery, setSearchQuery] = useState({
        input: "",
        filter: "all",
        sort: "relevance",
    });

    const WithNavigateBookPage = withNavigate(BookPage, books.length === 0);

    return (
        <>
            <h1 style={{ textAlign: "center" }}>Search for books</h1>
            <SearchForm
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />

            {booksRequest && <Loader />}
            {booksError && <ErrorComponent />}
            {!booksError && !booksRequest && (
                <Routes>
                    <Route
                        path="/"
                        element={<MainPage searchQuery={searchQuery} />}
                    />
                    <Route
                        path="/book/:id"
                        element={<WithNavigateBookPage />}
                    />
                </Routes>
            )}
        </>
    );
}

export default App;
