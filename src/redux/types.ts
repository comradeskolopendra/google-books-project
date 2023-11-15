import { store } from ".";
import { ThunkAction } from "redux-thunk";
import type { TBookActions } from "./store/books";

export type AppActions = TBookActions;
export type AppThunk<TReturn = void> = ThunkAction<
    TReturn,
    RootState,
    unknown,
    AppActions
>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch<TReturn = void> = (
    action: AppActions | AppThunk<TReturn>
) => void;
