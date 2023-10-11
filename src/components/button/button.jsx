import styles from "./button.module.css";

const Button = ({ type = "button", onClick, extraClasses = "", children = "", disabled = false }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`${styles.button} ${extraClasses}`}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;