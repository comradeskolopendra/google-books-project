import React, { ChangeEvent, FC, HTMLInputTypeAttribute, MouseEventHandler } from "react";
import { useAppDispatch } from '../../redux/hooks';
import styles from "./input.module.css";

interface IInput {
    placeholder: string;
    extraClass?: string;
    icon: string;
    inputValue: string;
    setInputValue: ({ name, value }: { name: string; value: string }) => void;
    type?: HTMLInputTypeAttribute
    onIconClick?: MouseEventHandler<HTMLButtonElement>;
    iconActionType: "button" | "submit" | "reset" | undefined;
    name: string;
}

const Input: FC<IInput> = ({
    placeholder = "",
    extraClass = "",
    icon = "",
    inputValue = "",
    setInputValue,
    type = "text",
    onIconClick,
    iconActionType = "button",
    name = "",
}) => {
    const dispatch = useAppDispatch();

    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
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
