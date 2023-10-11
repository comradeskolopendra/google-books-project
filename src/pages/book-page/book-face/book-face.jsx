import styles from "./book-face.module.css";

const BookFace = ({ bookFront }) => {

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
