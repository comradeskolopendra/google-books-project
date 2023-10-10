import styles from "./main-page.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getStateBooks, getStateLoadMoreBooks, getStatePaginationStep, getStateTotalBooks } from "../../selectors/books-selectors";
import BookCard from "./book-card/book-card";
import { loadMoreBooksThunk } from "../../redux/action/books";

import { v4 as uuid } from "uuid";

const MainPage = ({ searchQuery }) => {
    const dispatch = useDispatch();
    const books = useSelector(getStateBooks);
    const totalBooks = useSelector(getStateTotalBooks)
    const paginationStep = useSelector(getStatePaginationStep)
    const loadMoreBooks = useSelector(getStateLoadMoreBooks)

    const handleOnLoadMore = () => {
        if (searchQuery.input && searchQuery.sort) {
            dispatch(loadMoreBooksThunk(searchQuery))
        }
    }

    return <>
        {books.length !== 0 && <h2 className={styles.totalBooks}>Найдено: {totalBooks} книг</h2>}

        <section className={styles.booksWrapper}>
            {books.map((book) => <BookCard key={uuid()} to={`/book/${book.id}`} information={book.volumeInfo} />)}
        </section>

        {books.length !== 0 &&
            <div className={styles.loadMoreWrapper}>
                <button disabled={totalBooks === books.length} className={styles.button} onClick={handleOnLoadMore}>Загрузить больше</button>
                <h3>{loadMoreBooks ? "Loading..." : `${books.length} / ${totalBooks}`}</h3>
            </div>
        }
    </>
};

export default MainPage;