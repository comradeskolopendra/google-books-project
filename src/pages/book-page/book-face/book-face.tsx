import React, { FC } from "react";
import styles from "./book-face.module.css";

const BookFace: FC<{ bookFront: string }> = ({ bookFront }) => {

    return (
        <div className={styles.bookFrontWrapper}>
            {bookFront ? (
                <img src={bookFront} alt="" />
            ) : (
                <p>Изображение отсутствует</p>
            )}
        </div>
    );
};

export default BookFace;
