import styles from "./main-page.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
    getStateBooks,
    getStateLoadMoreBooks,
    getStateTotalBooks,
} from "../../selectors/books-selectors";
import BookCard from "./book-card/book-card";
import { loadMoreBooksThunk } from "../../redux/action/books";
import Button from "../../components/button/button";

import { v4 as uuid } from "uuid";
import { useEffect, useMemo } from "react";

const MainPage = ({ searchQuery }) => {
    const dispatch = useDispatch();
    const books = useSelector(getStateBooks);
    const totalBooks = useSelector(getStateTotalBooks);
    const loadMoreBooks = useSelector(getStateLoadMoreBooks);

    const handleOnLoadMore = () => {
        if (searchQuery.input && searchQuery.sort) {
            dispatch(loadMoreBooksThunk(searchQuery));
        }
    };

    const filteredBooks = useMemo(() => {
        return books.filter((book) => {
            if (searchQuery.filter === "all") {
                return true;
            }

            return book?.volumeInfo?.categories?.includes(searchQuery.filter);
        });
    }, [books, searchQuery.filter]);

    useEffect(() => console.log(filteredBooks), [filteredBooks])

    return (
        <>
            {books.length !== 0 && (
                <h2 className={styles.totalBooks}>
                    Найдено: {totalBooks} книг
                </h2>
            )}

            <section className={styles.booksWrapper}>
                {filteredBooks.map((book) => (
                    <BookCard
                        key={uuid()}
                        to={`/book/${book.id}`}
                        information={book.volumeInfo}
                    />
                ))}
            </section>

            {books.length !== 0 && (
                <div className={styles.loadMoreWrapper}>
                    <Button
                        disabled={totalBooks === books.length}
                        onClick={handleOnLoadMore}
                    >
                        Загрузить больше
                    </Button>
                    <h3>
                        {loadMoreBooks
                            ? "Loading..."
                            : `${books.length} / ${totalBooks}`}
                    </h3>
                </div>
            )}
        </>
    );
};

export default MainPage;
