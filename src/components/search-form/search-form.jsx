import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Input from "../input/input";
import Select from "../select/select";

import loupe from "../../images/loupe.png";
import { getBooksThunk } from "../../redux/action/books";

import styles from "./search-form.module.css";
import { setSearchQuery } from "../../redux/store/books";
import { getStateFilterOptions, getStateSearchQueryFilter, getStateSearchQueryInput, getStateSearchQuerySort, getStateSortOptions } from "../../selectors/books-selectors";
import { useEffect } from "react";

const SearchForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const filterOptions = useSelector(getStateFilterOptions);
    const sortOptions = useSelector(getStateSortOptions);

    const sortQuery = useSelector(getStateSearchQuerySort);
    const filterQuery = useSelector(getStateSearchQueryFilter);
    const inputQuery = useSelector(getStateSearchQueryInput);

    const handleOnSubmit = (event) => {
        event.preventDefault();
        dispatch(getBooksThunk({ sort: sortQuery, input: inputQuery }));
    };

    useEffect(() => {
        if (inputQuery && sortQuery) {
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
                icon={loupe}
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
