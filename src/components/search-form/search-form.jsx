import { useState } from "react";

import Input from "../input/input";
import Select from "../select/select";

import loupe from "../../images/loupe.png";
import { useDispatch } from "react-redux";
import { getBooksThunk } from "../../redux/action/books";

const SearchForm = () => {
    const dispatch = useDispatch();
    const [searchQuery, setSearchQuery] = useState({
        input: "",
        filter: "all",
        sort: "relevance",
    });

    const filterOptions = [
        { value: "all", selected: true },
        { value: "art", selected: false },
        { value: "biography", selected: false },
        { value: "computers", selected: false },
        { value: "history", selected: false },
        { value: "medical", selected: false },
        { value: "poetry", selected: false },
    ];

    const sortOptions = [
        { value: "relevance", selected: true },
        { value: "newest", selected: false },
    ];

    const handleOnSubmit = (event) => {
        console.log("test");
        event.preventDefault();
        dispatch(getBooksThunk(searchQuery));
    };

    return (
        <form onSubmit={handleOnSubmit}>
            <Input
                placeholder={"Поиск..."}
                inputValue={searchQuery.inputQuery}
                setInputValue={setSearchQuery}
                name="input"
                icon={loupe}
                iconActionType={"submit"}
            />
            <Select
                name={"filter"}
                selectedValue={searchQuery.filter}
                setSelectedValue={setSearchQuery}
                options={filterOptions}
                labelTitle={"Categories"}
            />
            <Select
                name={"sort"}
                selectedValue={searchQuery.sort}
                setSelectedValue={setSearchQuery}
                options={sortOptions}
                labelTitle={"Sorting by"}
            />
        </form>
    );
};

export default SearchForm;
