import styles from "./main-page.module.css";
import { useSelector } from "react-redux";
import { getStateBooks, getStateTotalBooks } from "../../selectors/books-selectors";
import { Link } from "react-router-dom";
import BookCard from "./book-card/book-card";

const MainPage = () => {
    const books = useSelector(getStateBooks);
    const totalBooks = useSelector(getStateTotalBooks)

    return <>
        {books.length !== 0 && <h2 className={styles.totalBooks}>Найдено: {totalBooks} книг</h2>}
        <section className={styles.booksWrapper}>
            {books.map((book) => <BookCard key={book.id} to={`/book/${book.id}`} information={book.volumeInfo} />)}
        </section>
    </>
};

export default MainPage;