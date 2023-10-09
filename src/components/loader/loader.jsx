import styles from "./loader.module.css";

const Loader = ({ isLoading }) => {
    return isLoading && <div className={styles.loader}></div>;
};

export default Loader;
