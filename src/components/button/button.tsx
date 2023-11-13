import React, { FC } from "react";
import styles from "./button.module.css";

interface IButton {
    type?: "button" | "submit" | "reset" | undefined;
    onClick: () => void;
    extraClass?: string;
    children: string;
    disabled?: boolean;
}

const Button: FC<IButton> = (
    {
        type = "button",
        onClick = () => { console.log("Забыли прокинуть пропс onClick на меня!") },
        extraClass = "",
        children = "",
        disabled = false
    }
) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`${styles.button} ${extraClass}`}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;