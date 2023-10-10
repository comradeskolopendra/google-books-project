import { Link } from "react-router-dom";

import styles from "./book-card.module.css";
import { useMemo } from "react";

const BookCard = ({ to, information }) => {

    const { image, categories, title, authors } = useMemo(() => ({
        image: information?.imageLinks?.thumbnail,
        categories: information?.categories,
        title: information.title,
        authors: information?.authors
    }), [information])

    return (
        <Link to={to} className={styles.card}>
            <img src={image} className={styles.bookImage} />
            <p className={styles.paragraph}>{categories ? categories[0] : "____"}</p>
            <h3>{title}</h3>
            <p className={styles.authors}>{authors ? authors.join(", ") : "____"}</p>
        </Link>
    )
};

export default BookCard;