import { RootState } from '../redux/types';

export const getStateBooksRequest = (store: RootState): boolean => store.booksRequest;
export const getStateBooksError = (store: RootState): boolean => store.booksError;
export const getStateBooks = (store: RootState): any[] => store.books;
export const getStateTotalBooks = (store: RootState): null | number => store.totalBooks;
export const getStateFilterOptions = (store: RootState): string[] => store.filterOptions;
export const getStateSortOptions = (store: RootState): string[] => store.sortOptions;
export const getStatePaginationStep = (store: RootState): number => store.paginationStep;
export const getStateLoadMoreBooks = (store: RootState): boolean => store.loadMoreBooksRequest;
export const getStateSearchQuerySort = (store: RootState): string => store.searchQuery.sort;
export const getStateSearchQueryInput = (store: RootState): string => store.searchQuery.input;
export const getStateSearchQueryFilter = (store: RootState): string => store.searchQuery.filter;
export const getStateErrorMessage = (store: RootState): string => store.errorMessage;