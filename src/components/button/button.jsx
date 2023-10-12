import styles from "./button.module.css";

const Button = ({ type = "button", onClick = () => { console.log("Забыли прокинуть пропс onClick на меня!") }, extraClasses = "", children = "", disabled = false }) => {
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