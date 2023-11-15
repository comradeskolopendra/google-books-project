import React, { FC } from "react";
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { loadMoreBooksThunk } from "../../../redux/action/books";

import Button from "../../../components/button/button";
import { getStateLoadMoreBooks, getStateSearchQueryInput, getStateSearchQuerySort, getStateTotalBooks } from "../../../selectors/books-selectors";

import styles from "./bottom-side.module.css";

interface IBottomSide {
    filteredBooks: any[];
    filterQuery: string;
}

const BottomSide: FC<IBottomSide> = ({ filteredBooks, filterQuery }) => {
    const dispatch = useAppDispatch();
    const totalBooks = useAppSelector(getStateTotalBooks);
    const inputQuery = useAppSelector(getStateSearchQueryInput);
    const sortQuery = useAppSelector(getStateSearchQuerySort);
    const loadMoreBooks = useAppSelector(getStateLoadMoreBooks);

    const handleOnLoadMore = () => {
        if (inputQuery && sortQuery) {
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