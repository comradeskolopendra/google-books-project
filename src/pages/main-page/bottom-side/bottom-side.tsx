import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadMoreBooksThunk } from "../../../redux/action/books";

import Button from "../../../components/button/button";
import { getStateLoadMoreBooks, getStateSearchQueryInput, getStateSearchQuerySort, getStateTotalBooks } from "../../../selectors/books-selectors";

import styles from "./bottom-side.module.css";

interface IBottomSide {
    filteredBooks: any[];
    filterQuery: string;
}

const BottomSide: FC<IBottomSide> = ({ filteredBooks, filterQuery }) => {
    const dispatch = useDispatch();
    const totalBooks = useSelector(getStateTotalBooks);
    const inputQuery = useSelector(getStateSearchQueryInput);
    const sortQuery = useSelector(getStateSearchQuerySort);
    const loadMoreBooks = useSelector(getStateLoadMoreBooks);

    const handleOnLoadMore = () => {
        if (inputQuery && sortQuery) {
            // @ts-ignore
            dispatch(loadMoreBooksThunk({ sort: sortQuery, input: inputQuery }));
        }
    };

    return (
        <div className={styles.loadMoreWrapper}>
            <Button
                disabled={totalBooks === filteredBooks.length}
                onClick={handleOnLoadMore}
            >
                Загрузить больше
            </Button>
            <h3 className={"totalBooks"}>
                {loadMoreBooks
                    ? "Loading..."
                    : `${filteredBooks.length} категории ${filterQuery} из ${totalBooks} возможных`}
            </h3>
        </div>
    )
};

export default BottomSide;