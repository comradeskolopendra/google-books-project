import styles from "./error.module.css";

const ErrorComponent = ({ error }) => {
    return <h3 className={styles.error}>Произошла ошибка! {error}</h3>
};

export default ErrorComponent;