import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import {
    getStateBooksError,
    getStateBooksRequest,
    getStateBooksErrorMessage
} from "../selectors/books-selectors";

import SearchForm from "../components/search-form/search-form";
import Loader from "../components/loader/loader";
import ErrorComponent from "../components/error/error";

import BookPage from "../pages/book-page/book-page";
import MainPage from "../pages/main-page/main-page";

function App() {
    const booksRequest = useSelector(getStateBooksRequest);
    const booksError = useSelector(getStateBooksError);
    const booksErrorMessage = useSelector(getStateBooksErrorMessage)

    return (
        <>
            <h1 className={"totalBooks"}>Искать книги</h1>
            <SearchForm />

            {booksRequest && <Loader />}
            {booksError && <ErrorComponent error={booksErrorMessage} />}
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
        </>
    );
}

export default App;
