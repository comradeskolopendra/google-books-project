import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import Input from "../input/input";
import Select from "../select/select";

import loupe from "../../images/loupe.png";
import { useDispatch } from "react-redux";
import { getBooksThunk } from "../../redux/action/books";

import styles from "./search-form.module.css";
import { getStateFilterOptions, getStateSortOptions } from "../../selectors/books-selectors";

const SearchForm = ({ searchQuery, setSearchQuery }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const filterOptions = useSelector(getStateFilterOptions);
    const sortOptions = useSelector(getStateSortOptions);

    useEffect(() => {
        if (searchQuery.input && searchQuery.sort) {
            dispatch(getBooksThunk(searchQuery));
        }
    }, [searchQuery.sort])

    const handleOnSubmit = (event) => {
        event.preventDefault();
        dispatch(getBooksThunk(searchQuery));

        if (location.pathname !== "/") {
            navigate("/")
        }
    };

    return (
        <form onSubmit={handleOnSubmit} className={styles.form}>
            <Input
                placeholder={"Поиск..."}
                inputValue={searchQuery.inputQuery}
                setInputValue={setSearchQuery}
                name="input"
                icon={loupe}
                iconActionType={"submit"}
            />
            <div className={styles.selectsWrapper}>
                <Select
                    name={"filter"}
                    selectedValue={searchQuery.filter}
                    setSelectedValue={setSearchQuery}
                    options={filterOptions}
                    labelTitle={"Categories:"}
                />
                <Select
                    name={"sort"}
                    selectedValue={searchQuery.sort}
                    setSelectedValue={setSearchQuery}
                    options={sortOptions}
                    labelTitle={"Sorting by:"}
                />
            </div>
        </form>
    );
};

export default SearchForm;
