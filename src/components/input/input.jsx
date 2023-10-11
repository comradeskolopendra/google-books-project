import { useDispatch } from "react-redux";
import styles from "./input.module.css";

const Input = ({
    placeholder = "",
    extraClass = "",
    icon = "",
    inputValue = "",
    setInputValue = () => { console.log("инпут должен быть контролируемым!") },
    type = "text",
    onIconClick = () => { },
    iconActionType = "button",
    name = "",
}) => {
    const dispatch = useDispatch();

    const handleOnChange = (event) => {
        const {
            target: { value },
        } = event;

        dispatch(setInputValue({ name, value }));
    };

    return (
        <div className={styles.inputWrapper}>
            <input
                placeholder={placeholder}
                value={inputValue}
                type={type}
                className={`${styles.input} ${extraClass}`}
                onChange={handleOnChange}
            />
            {icon && (
                <button
                    className={styles.iconButton}
                    type={iconActionType}
                    onClick={onIconClick}
                >
                    <img src={icon} />
                </button>
            )}
        </div>
    );
};

export default Input;
