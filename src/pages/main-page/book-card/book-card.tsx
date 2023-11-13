import React, { FC, useMemo } from "react";
import { Link } from "react-router-dom";
import styles from "./book-card.module.css";

interface IBookCard {
    to: string;
    information: any;
}

const BookCard: FC<IBookCard> = ({ to, information }) => {
    const { image, categories, title, authors } = useMemo(
        () => ({
            image: information?.imageLinks?.thumbnail || "",
            categories: information?.categories || [],
            title: information?.title || "",
            authors: information?.authors || [],
        }),
        [information]
    );

    return (
        <Link to={to} className={styles.card}>
            <img src={image} className={styles.bookImage} />
            <p className={styles.paragraph}>
                {categories.length !== 0 ? categories[0] : "____"}
            </p>
            <h3>{title}</h3>
            <p className={styles.authors}>
                {authors.length !== 0 ? authors.join(", ") : "____"}
            </p>
        </Link>
    );
};

export default BookCard;
