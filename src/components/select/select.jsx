import { v4 as uuid } from "uuid";

import styles from "./select.module.css";

const Select = ({ options, labelTitle, name, selectedValue, setSelectedValue }) => {

    const handleOnChange = (event) => {
        const {
            target: { value },
        } = event;

        console.log(value)

        setSelectedValue((prevState) => ({...prevState, [name]: value}));
    };

    return (
        <div className={styles.selectWrapper}>
            <label>{labelTitle}</label>
            <select value={selectedValue} onChange={handleOnChange}>
                {options.map((element) => (
                    <option key={uuid()} value={element.value}>
                        {element.value}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Select;
