import { useMemo } from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { getStateBooks } from "../../selectors/books-selectors";

const BookPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const books = useSelector(getStateBooks);

    const selectedBook = useMemo(() => books.find((book) => book.id === id), [id, books])

    const handleOnBack = () => {
        navigate("/");
    }

    return <>
        {selectedBook && <>
            <p>{id}</p>
            <p>{selectedBook?.volumeInfo?.title}</p>
        </>}
        <button onClick={handleOnBack}>back to main page</button>

    </>
};

export default BookPage;