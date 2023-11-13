import React, { FC, FormEvent, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Input from "../input/input";
import Select from "../select/select";

import loupe from "../../images/loupe.png";
import { getBooksThunk } from "../../redux/action/books";
import { clearErrorMessage } from "../../redux/store/books";

import styles from "./search-form.module.css";
import { setSearchQuery } from "../../redux/store/books";
import {
    getStateErrorMessage,
    getStateFilterOptions,
    getStateSearchQueryFilter,
    getStateSearchQueryInput,
    getStateSearchQuerySort,
    getStateSortOptions
}
    from "../../selectors/books-selectors";

const SearchForm: FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const filterOptions = useSelector(getStateFilterOptions);
    const sortOptions = useSelector(getStateSortOptions);
    const sortQuery = useSelector(getStateSearchQuerySort);
    const filterQuery = useSelector(getStateSearchQueryFilter);
    const inputQuery = useSelector(getStateSearchQueryInput);
    const errorMessage = useSelector(getStateErrorMessage)

    const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (errorMessage) {
            // @ts-ignore
            dispatch(clearErrorMessage())
        }

        // @ts-ignore
        dispatch(getBooksThunk({ sort: sortQuery, input: inputQuery }));
    };

    console.log(loupe, typeof loupe)

    useEffect(() => {
        if (inputQuery && sortQuery) {

            // @ts-ignore
            dispatch(getBooksThunk({ input: inputQuery, sort: sortQuery }))
        }
    }, [sortQuery])

    useEffect(() => {
        if (location.pathname !== "/") {
            navigate("/", { replace: true })
        }
    }, [sortQuery, filterQuery])

    return (
        <form onSubmit={handleOnSubmit} className={styles.form}>
            <Input
                placeholder={"Поиск..."}
                inputValue={inputQuery}
                setInputValue={setSearchQuery}
                name={"input"}
                icon={(loupe as unknown as string)}
                iconActionType={"submit"}
            />
            <div className={styles.selectsWrapper}>
                <Select
                    name={"filter"}
                    selectedValue={filterQuery}
                    setSelectedValue={setSearchQuery}
                    options={filterOptions}
                    labelTitle={"Categories:"}
                />
                <Select
                    name={"sort"}
                    selectedValue={sortQuery}
                    setSelectedValue={setSearchQuery}
                    options={sortOptions}
                    labelTitle={"Sorting by:"}
                />
            </div>
        </form>
    );
};

export default SearchForm;
