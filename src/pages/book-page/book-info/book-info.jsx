import styles from "./book-info.module.css";

const BookInfo = ({ authors, categories, title, description }) => {
    return (
        <section className={styles.infoWrapper}>
            <div className={styles.item}>
                <span>Категории:</span> {categories.join(", ")}
            </div>
            <div className={styles.item}>
                <span>Заголовок:</span> {title}
            </div>
            <div className={styles.item}>
                <span>Описание:</span> {description}
            </div>
            <div className={styles.item}>
                <span>Авторы:</span> {authors.join(", ")}
            </div>
        </section>
    );
};

export default BookInfo;
