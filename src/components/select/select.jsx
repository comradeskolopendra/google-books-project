import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";

import styles from "./select.module.css";

const Select = ({ options, labelTitle, name, selectedValue, setSelectedValue }) => {
    const dispatch = useDispatch();

    const handleOnChange = (event) => {
        const {
            target: { value },
        } = event;

        dispatch(setSelectedValue({ name, value }));
    };

    return (
        <div className={styles.selectWrapper}>
            <label htmlFor={name}>{labelTitle}</label>
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
