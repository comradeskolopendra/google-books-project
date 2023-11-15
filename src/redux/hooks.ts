import { useSelector as selectorHook, TypedUseSelectorHook, useDispatch as dispatchHook } from "react-redux";
import { RootState, AppDispatch } from "./types";
import type {} from "redux-thunk/extend-redux";

export const useAppSelector: TypedUseSelectorHook<RootState> = selectorHook;
export const useAppDispatch: () => AppDispatch = dispatchHook;