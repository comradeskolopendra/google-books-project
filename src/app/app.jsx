import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    getStateBooksError,
    getStateBooksRequest,
    getStateBooks
} from "../selectors/books-selectors";

import SearchForm from "../components/search-form/search-form";
import { getBooksThunk } from "../redux/action/books";
import Loader from "../components/loader/loader";

function App() {
    const dispatch = useDispatch();
    const booksRequest = useSelector(getStateBooksRequest);
    const booksError = useSelector(getStateBooksError);
    const books = useSelector(getStateBooks);

    useEffect(() => {
        dispatch(getBooksThunk());
    }, []);

    useEffect(() => {
        console.log(books);
    }, [books])

    return (
        <>
            {booksRequest && <Loader isLoading={booksRequest} />}
            <SearchForm />
        </>
    );
}

export default App;
