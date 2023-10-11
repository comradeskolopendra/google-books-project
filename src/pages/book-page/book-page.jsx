import { useMemo } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getStateBooks } from "../../selectors/books-selectors";
import BookFace from "./book-face/book-face";

import styles from "./book-page.module.css";
import BookInfo from "./book-info/book-info";
import Button from "../../components/button/button";

const BookPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const books = useSelector(getStateBooks);
    const { authors, title, image, description, categories } = useMemo(() => {
        const book = books.find((book) => book.id === id).volumeInfo;
        return {
            authors: book?.authors || [],
            title: book?.title || "",
            image: book?.imageLinks?.thumbnail || "",
            description: book?.description || "",
            categories: book?.categories || [],
        };
    }, [id, books]);

    return (
        <section className={styles.bookPage}>
            {books.length !== 0 && id && (
                <div className={styles.bookWrapper}>
                    <BookFace bookFront={image} />
                    <BookInfo
                        title={title}
                        categories={categories}
                        authors={authors}
                        description={description}
                    />
                </div>
            )}
            <Button
                onClick={() => navigate("/")}
                extraClasses={styles.goBackButton}
            >
                Вернуться назад
            </Button>
        </section>
    );
};

export default BookPage;
