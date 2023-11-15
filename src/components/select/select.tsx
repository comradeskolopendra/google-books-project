import React, { FC } from "react";
import { useAppDispatch } from '../../redux/hooks';
import { v4 as uuid } from "uuid";
import { AppActions } from '../../redux/types';

import styles from "./select.module.css";

interface ISelect {
    options: string[];
    labelTitle: string;
    name: string;
    selectedValue: string;
    setSelectedValue: ({ name, value }: { name: string; value: string }) => void;
}

const Select: FC<ISelect> = ({ options = [], labelTitle = "", name = "", selectedValue = "", setSelectedValue }) => {
    const dispatch = useAppDispatch();

    const handleOnChange = (event) => {
        const {
            target: { value },
        } = event;

        dispatch(setSelectedValue({ name, value }));
    };

    return (
        <div className={styles.selectWrapper}>
            <span>{labelTitle}</span>
            <select value={selectedValue} onChange={handleOnChange}>
                {options.map((element) => (
                    <option key={uuid()} value={element}>
                        {element}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Select;
