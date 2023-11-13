import React, { FC } from "react";
import styles from "./error.module.css";


const ErrorComponent: FC<{ error: string }> = ({ error }) => {
    return <div className={styles.errorWrapper}><h3 className={styles.error}>Произошла ошибка! {error}</h3></div>
};

export default ErrorComponent;