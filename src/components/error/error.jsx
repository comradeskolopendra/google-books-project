import styles from "./error.module.css";

const ErrorComponent = ({ error }) => {
    return <div className={styles.errorWrapper}><h3 className={styles.error}>Произошла ошибка! {error}</h3></div>
};

export default ErrorComponent;