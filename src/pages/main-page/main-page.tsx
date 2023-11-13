import React, { FC, useMemo } from "react";
import styles from "./main-page.module.css";
import { useSelector } from "react-redux";
import {
    getStateBooks,
    getStateSearchQueryFilter,
    getStateTotalBooks,
} from "../../selectors/books-selectors";
import BookCard from "./book-card/book-card";
import BottomSide from "./bottom-side/bottom-side";

import { v4 as uuid } from "uuid";

const MainPage: FC = () => {
    const books = useSelector(getStateBooks);
    const totalBooks = useSelector(getStateTotalBooks);
    const filterQuery = useSelector(getStateSearchQueryFilter)

    const filteredBooks = useMemo(() => {
        return books.filter((book) => {
            if (filterQuery === "all") {
                return true;
            }

            return book?.volumeInfo?.categories?.some(category => category.toLowerCase() === filterQuery);
        });
    }, [books, filterQuery]);

    return (
        <>
            {filteredBooks.length !== 0 && (
                <h3 className={"totalBooks"}>
                    Найдено: {totalBooks} книг
                </h3>
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

            {(filteredBooks.length !== 0 && books.length !== 0) ? (
                <BottomSide filterQuery={filterQuery} filteredBooks={filteredBooks} />
            ) : (
                <p className="totalBooks">По вашим запросам книг не найдено!</p>
            )}
        </>
    );
};

export default MainPage;
